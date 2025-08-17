export default {
  name: "color",
  description: "Donne une couleur aléatoire",
  category: "fun",
  execute: async (sock, m) => {
    const colors = ["🔵 Bleu", "🔴 Rouge", "🟢 Vert", "🟡 Jaune", "🟣 Violet", "⚫ Noir"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    await sock.sendMessage(m.key.remoteJid, { text: `Ta couleur : ${random}` }, { quoted: m });
  }
};
