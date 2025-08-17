export default {
  name: "hack",
  description: "Jeu de simulation hack",
  category: "fun",
  execute: async (sock, m, args) => {
    const cible = args[0] || "utilisateur";
    const pourcent = Math.floor(Math.random() * 101);
    const msg = `💻 Hacking ${cible} ... ${pourcent}% terminé 🕵️‍♂️`;
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
