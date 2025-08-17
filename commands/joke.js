export default {
  name: "joke",
  description: "Envoie une blague aléatoire",
  category: "fun",
  execute: async (sock, m, args) => {
    const jokes = ["Pourquoi le chat traverse la route ? 🤔", "Blague2", "Blague3"];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    await sock.sendMessage(m.key.remoteJid, { text: joke }, { quoted: m });
  }
};
