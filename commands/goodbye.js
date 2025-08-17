export default {
  name: "goodbye",
  description: "Envoie un message d’au revoir",
  category: "fun",
  execute: async (sock, m, args) => {
    await sock.sendMessage(m.key.remoteJid, { text: "👋 Au revoir et à bientôt !" }, { quoted: m });
  }
};
