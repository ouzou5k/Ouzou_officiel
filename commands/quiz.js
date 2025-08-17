export default {
  name: "quiz",
  description: "Pose une question quiz",
  category: "jeu",
  execute: async (sock, m) => {
    const quizzes = [
      "❓ Quelle est la capitale du Mali ? (Bamako / Ségou / Mopti)",
      "❓ Qui a inventé l'électricité ? (Tesla / Edison / Einstein)",
      "❓ Combien font 7x8 ? (54 / 56 / 58)"
    ];
    const random = quizzes[Math.floor(Math.random() * quizzes.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
