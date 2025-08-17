export default {
  name: "motivate",
  description: "Message de motivation",
  category: "fun",
  execute: async (sock, m) => {
    const msgs = [
      "🚀 Ne lâche jamais tes rêves.",
      "🔥 La réussite appartient aux persévérants.",
      "🌟 Chaque jour est une nouvelle chance."
    ];
    const random = msgs[Math.floor(Math.random() * msgs.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
