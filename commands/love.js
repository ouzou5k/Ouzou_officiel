export default {
  name: "love",
  description: "Calcule la compatibilité amoureuse",
  category: "fun",
  execute: async (sock, m, args) => {
    const cible = args.join(" ") || "inconnu";
    const pourcent = Math.floor(Math.random() * 101);
    const msg = `❤️ Compatibilité avec ${cible} : ${pourcent}% 💘`;
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
