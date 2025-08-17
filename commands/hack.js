export default {
  name: "hack",
  description: "Fausse commande de hacking",
  category: "fun",
  execute: async (sock, m, args) => {
    const user = args[0] || "cible inconnue";
    await sock.sendMessage(m.key.remoteJid, { text: `💻 Hack en cours de ${user}... 🔥` }, { quoted: m });
    setTimeout(() => {
      sock.sendMessage(m.key.remoteJid, { text: `✅ Hack de ${user} terminé avec succès 😈` }, { quoted: m });
    }, 3000);
  }
};
