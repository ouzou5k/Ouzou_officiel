export default {
  name: "profil",
  description: "Affiche les infos du profil",
  category: "info",
  execute: async (sock, m, args) => {
    const user = m.pushName || "Utilisateur";
    const msg = `👤 Profil de : ${user}`;
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
