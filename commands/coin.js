export default {
  name: "coin",
  description: "Pile ou Face 🪙",
  category: "fun",
  execute: async (sock, m) => {
    const result = Math.random() < 0.5 ? "Pile" : "Face";
    await sock.sendMessage(m.key.remoteJid, { text: `🪙 Résultat : ${result}` }, { quoted: m });
  }
};
