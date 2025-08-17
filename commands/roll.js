export default {
  name: "roll",
  description: "Lancer un dé",
  category: "fun",
  execute: async (sock, m, args) => {
    const result = Math.floor(Math.random() * 6) + 1;
    await sock.sendMessage(m.key.remoteJid, { text: `🎲 Résultat du dé : ${result}` }, { quoted: m });
  }
};
