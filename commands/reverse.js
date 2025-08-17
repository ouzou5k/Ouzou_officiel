export default {
  name: "reverse",
  description: "Inverse un texte",
  category: "utilitaires",
  execute: async (sock, m, args) => {
    if (!args[0]) return m.reply("⚠️ Exemple : .reverse Bonjour");
    const reversed = args.join(" ").split("").reverse().join("");
    await sock.sendMessage(m.key.remoteJid, { text: `🔄 ${reversed}` }, { quoted: m });
  }
};
