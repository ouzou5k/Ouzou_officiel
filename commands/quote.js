export default {
  name: "quote",
  description: "Donne une citation inspirante",
  category: "info",
  execute: async (sock, m) => {
    const quotes = [
      "🌟 La persévérance finit toujours par payer.",
      "🔥 N'abandonne jamais, le succès est proche.",
      "💡 Chaque jour est une nouvelle chance de réussir."
    ];
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
