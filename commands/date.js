export default {
  name: "date",
  description: "Affiche la date du jour",
  category: "utilitaires",
  execute: async (sock, m) => {
    const today = new Date().toLocaleDateString();
    await sock.sendMessage(m.key.remoteJid, { text: `📅 Aujourd'hui : ${today}` }, { quoted: m });
  }
};
