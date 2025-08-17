export default {
  name: "fact",
  description: "Donne un fait intéressant",
  category: "fun",
  execute: async (sock, m) => {
    const facts = [
      "🌍 70% de la Terre est recouverte d’eau.",
      "🧠 Le cerveau humain contient environ 86 milliards de neurones.",
      "🐝 Les abeilles peuvent reconnaître les visages humains."
    ];
    const random = facts[Math.floor(Math.random() * facts.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
