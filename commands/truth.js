export default {
  name: "truth",
  description: "Pose une question vérité",
  category: "jeu",
  execute: async (sock, m) => {
    const truths = [
      "😏 As-tu déjà menti à ton meilleur ami ?",
      "🙃 Quelle est ta plus grande honte ?",
      "❤️ Qui est ton crush secret ?"
    ];
    const random = truths[Math.floor(Math.random() * truths.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
