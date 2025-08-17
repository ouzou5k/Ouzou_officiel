export default {
  name: "luck",
  description: "Chance du jour pour un utilisateur",
  category: "fun",
  execute: async (sock, m, args) => {
    const mentions = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    const cible = mentions[0] || m.key.remoteJid;
    const pourcent = Math.floor(Math.random() * 101);
    const txt = `🔮 Chance du jour pour <@${cible.split("@")[0]}> : *${pourcent}%*`;
    await sock.sendMessage(m.key.remoteJid, { text: txt, mentions: [cible] }, { quoted: m });
  }
};
