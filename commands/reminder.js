export default {
  name: "reminder",
  description: "Rappelle un message après un temps donné",
  category: "utilitaires",
  execute: async (sock, m, args) => {
    const time = parseInt(args[0]);
    const text = args.slice(1).join(" ");
    if (!time || !text) return m.reply("⚠️ Exemple : .reminder 10 Va boire de l’eau");
    await m.reply(`⏳ Rappel dans ${time} secondes...`);
    setTimeout(() => {
      sock.sendMessage(m.key.remoteJid, { text: `🔔 Rappel : ${text}` }, { quoted: m });
    }, time * 1000);
  }
};
