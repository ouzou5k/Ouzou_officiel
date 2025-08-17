export default {
  name: "compliment",
  description: "Envoie un compliment",
  category: "fun",
  execute: async (sock, m) => {
    const compliments = [
      "✨ Tu brilles aujourd’hui.",
      "🔥 T’as un style incroyable.",
      "💯 Toujours au top !"
    ];
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
