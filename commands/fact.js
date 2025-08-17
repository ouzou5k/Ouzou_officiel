export default {
  name: "fact",
  description: "Envoie un fait aléatoire",
  category: "fun",
  execute: async (sock, m, args) => {
    const facts = [
      "Saviez-vous ? Les chats ont 32 muscles dans chaque oreille.",
      "Saviez-vous ? Le soleil est 109 fois plus large que la Terre.",
      "Saviez-vous ? L’abeille peut reconnaître les visages humains."
    ];
    const fact = facts[Math.floor(Math.random() * facts.length)];
    await sock.sendMessage(m.key.remoteJid, { text: fact }, { quoted: m });
  }
};
