export default {
  name: "animal",
  description: "Envoie un animal aléatoire",
  category: "fun",
  execute: async (sock, m) => {
    const animals = ["🐶", "🐱", "🦁", "🐯", "🐵", "🐧", "🐍", "🐼"];
    const random = animals[Math.floor(Math.random() * animals.length)];
    await sock.sendMessage(m.key.remoteJid, { text: `Ton animal : ${random}` }, { quoted: m });
  }
};
