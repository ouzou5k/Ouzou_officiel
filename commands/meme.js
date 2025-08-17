
export default {
  name: "meme",
  description: "Envoie un meme aléatoire",
  category: "fun",
  execute: async (sock, m, args) => {
    const memes = ["😂 Meme1", "🤣 Meme2", "😎 Meme3"];
    const meme = memes[Math.floor(Math.random() * memes.length)];
    await sock.sendMessage(m.key.remoteJid, { text: meme }, { quoted: m });
  }
};
