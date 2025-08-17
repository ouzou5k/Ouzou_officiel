export default {
  name: "age",
  description: "Devine ton âge",
  category: "fun",
  execute: async (sock, m) => {
    const age = Math.floor(Math.random() * 60) + 10;
    await sock.sendMessage(m.key.remoteJid, { text: `🎂 Je parie que tu as *${age} ans* 😏` }, { quoted: m });
  }
};
