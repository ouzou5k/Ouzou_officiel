export default {
  name: "time",
  description: "Affiche l’heure actuelle",
  category: "fun",
  execute: async (sock, m, args) => {
    const date = new Date();
    const msg = `⏰ Heure actuelle : ${date.toLocaleTimeString()}`;
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
