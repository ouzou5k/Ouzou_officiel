export default {
  name: "time",
  description: "Affiche l'heure actuelle",
  category: "utilitaires",
  execute: async (sock, m) => {
    const now = new Date().toLocaleTimeString();
    await sock.sendMessage(m.key.remoteJid, { text: `🕒 Heure actuelle : ${now}` }, { quoted: m });
  }
};
