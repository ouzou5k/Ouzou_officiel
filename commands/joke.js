export default {
  name: "joke",
  description: "Raconte une blague",
  category: "fun",
  execute: async (sock, m) => {
    const jokes = [
      "😂 Pourquoi les plongeurs plongent-ils toujours en arrière ? Parce que sinon ils tombent dans le bateau.",
      "🤣 Quelle est la femelle du hamster ? L’Amsterdam.",
      "😅 Pourquoi les canards ont-ils des plumes ? Pour couvrir leur derrière."
    ];
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
