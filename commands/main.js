import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion
} from "@whiskeysockets/baileys";
import P from "pino";
import cron from "node-cron";
import fs from "fs";
import path from "path";

const commands = {};
const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));
for (let file of commandFiles) {
  const command = await import(path.join(process.cwd(), "commands", file));
  commands[command.default.name] = command.default;
}

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: "silent" })
  });

  sock.ev.on("creds.update", saveCreds);

  // Auto-statut toutes les 5 minutes
  const statusList = [
    "🤖 Bot Ouzou_officiel",
    "🔥 Toujours en ligne",
    "⚡ 300+ commandes dispo",
    "📌 By Ouzou"
  ];

  cron.schedule("*/5 * * * *", async () => {
    const status = statusList[Math.floor(Math.random() * statusList.length)];
    await sock.sendPresenceUpdate("available");
    await sock.sendMessage("status@broadcast", { text: status });
  });

  // Bienvenue
  sock.ev.on("group-participants.update", async (update) => {
    if (update.action === "add") {
      for (let user of update.participants) {
        await sock.sendMessage(update.id, {
          text: `👋 Bienvenue @${user.split("@")[0]} dans le groupe 🎉`,
          mentions: [user]
        });
      }
    }
  });

  // Auto-like & commandes
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return;

    try {
      await sock.sendMessage(m.key.remoteJid, {
        react: { text: "👍", key: m.key }
      });

      // Commandes
      const text = m.message.conversation || m.message.extendedTextMessage?.text;
      if (!text?.startsWith(".")) return;

      const args = text.slice(1).trim().split(/ +/);
      const cmdName = args.shift().toLowerCase();
      if (commands[cmdName]) commands[cmdName].execute(sock, m, args);

    } catch (err) {
      console.log("Erreur message:", err);
    }
  });
}

startBot();
