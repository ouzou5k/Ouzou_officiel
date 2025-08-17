export default {
  name: "translate",
  description: "Traduit en anglais (basique, fake)",
  category: "info",
  execute: async (sock, m, args) => {
    const text = args.join(" ");
    if (!text) return m.reply("⚠️ Exemple : .translate Bonjour");
    const fakeTranslation = `🇫🇷 ${text} → 🇬🇧 Hello`;
    await sock.sendMessage(m.key.remoteJid, { text: fakeTranslation }, { quoted: m });
  }
};
