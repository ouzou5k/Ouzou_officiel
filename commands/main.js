import makeWASocket, {
  useMultiFileAuthState,
  fetchLatestBaileysVersion
} from "@whiskeysockets/baileys";
import P from "pino";
import cron from "node-cron";

async function startBot() {
  // Authentification multi-fichiers
  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: "silent" })
  });

  // Sauvegarde des credentials
  sock.ev.on("creds.update", saveCreds);

  // === AUTO-STATUT ===
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

  // === MESSAGE DE BIENVENUE ===
  sock.ev.on("group-participants.update", async (update) => {
    try {
      const jid = update.id;
      if (update.action === "add") {
        for (let user of update.participants) {
          await sock.sendMessage(jid, {
            text: `👋 Bienvenue @${user.split("@")[0]} dans le groupe 🎉`,
            mentions: [user]
          });
        }
      }
    } catch (err) {
      console.log("Erreur bienvenue:", err);
    }
  });

  // === AUTO-LIKE (réagit à chaque message reçu) ===
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message || m.key.fromMe) return; // ignorer les messages du bot

    try {
      await sock.sendMessage(m.key.remoteJid, {
        react: { text: "👍", key: m.key }
      });
    } catch (err) {
      console.log("Erreur auto-like:", err);
    }
  });
}

startBot();
