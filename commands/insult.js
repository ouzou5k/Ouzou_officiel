export default {
  name: "insult",
  description: "Envoie une insulte drôle (pas méchante)",
  category: "fun",
  execute: async (sock, m) => {
    const insults = [
      "😂 T’es lent comme une tortue en vacances.",
      "🤣 Tu réfléchis comme Windows 98.",
      "😜 Même Google n’arrive pas à te trouver intelligent."
    ];
    const random = insults[Math.floor(Math.random() * insults.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
