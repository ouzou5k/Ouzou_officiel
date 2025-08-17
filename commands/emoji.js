export default {
  name: "emoji",
  description: "Envoie un emoji aléatoire",
  category: "fun",
  execute: async (sock, m) => {
    const emojis = ["😂","🤣","😍","😎","🔥","💯","🎉","⚡","🥶","😈"];
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
