export default {
  name: "status",
  description: "Affiche le statut du bot",
  category: "info",
  execute: async (sock, m, args) => {
    const msg = "✅ Bot en ligne et fonctionne correctement !";
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
