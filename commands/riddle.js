export default {
  name: "riddle",
  description: "Donne une devinette",
  category: "jeu",
  execute: async (sock, m) => {
    const riddles = [
      "🧩 Je parle sans bouche et j'entends sans oreilles. Qui suis-je ? (Réponse : un écho)",
      "🧩 Plus je sèche, plus je deviens mouillé. Qui suis-je ? (Réponse : une serviette)",
      "🧩 J’ai des clés mais pas de portes. Qui suis-je ? (Réponse : un clavier)"
    ];
    const random = riddles[Math.floor(Math.random() * riddles.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
