export default {
  name: "nickname",
  description: "Génère un surnom marrant",
  category: "fun",
  execute: async (sock, m) => {
    const names = ["🔥KingPro", "😎BossMan", "😂CrazyBoy", "🌟StarGirl", "⚡FlashX"];
    const random = names[Math.floor(Math.random() * names.length)];
    await sock.sendMessage(m.key.remoteJid, { text: `Ton surnom : *${random}*` }, { quoted: m });
  }
};
