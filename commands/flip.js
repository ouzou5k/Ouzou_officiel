export default {
  name: "flip",
  description: "Lancer une pièce (pile ou face)",
  category: "fun",
  execute: async (sock, m, args) => {
    const result = Math.random() < 0.5 ? "Pile" : "Face";
    await sock.sendMessage(m.key.remoteJid, { text: `🪙 Résultat : ${result}` }, { quoted: m });
  }
};
