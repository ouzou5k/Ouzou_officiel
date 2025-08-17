export default {
  name: "greet",
  description: "Envoie un message de bienvenue",
  category: "fun",
  execute: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: "👋 Bienvenue sur le groupe !" }, { quoted: m });
  }
};
