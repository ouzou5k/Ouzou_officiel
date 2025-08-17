export default {
  name: "ping",
  description: "Répond pong 🏓",
  category: "fun",
  execute: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: "🏓 Pong!" }, { quoted: m });
  }
};
