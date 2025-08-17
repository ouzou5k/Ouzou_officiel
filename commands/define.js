export default {
  name: "define",
  description: "Donne une définition simple",
  category: "info",
  execute: async (sock, m, args) => {
    if (!args[0]) return m.reply("⚠️ Exemple : .define amour");
    const word = args[0].toLowerCase();
    const defs = {
      amour: "❤️ Sentiment profond d'affection.",
      courage: "💪 Force de faire face à la peur.",
      respect: "🙏 Attitude de considération envers autrui."
    };
    const def = defs[word] || "❌ Définition non trouvée.";
    await sock.sendMessage(m.key.remoteJid, { text: `📖 ${word} : ${def}` }, { quoted: m });
  }
};
