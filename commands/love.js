export default {
  name: "love",
  description: "Compatibilité love avec un utilisateur mentionné",
  category: "fun",
  execute: async (sock, m, args) => {
    const from = m.key.participant || m.key.remoteJid;
    const mentions = m.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentions.length === 0) {
      return sock.sendMessage(m.key.remoteJid, { text: "Tag quelqu’un : .love @user" }, { quoted: m });
    }
    const cible = mentions[0];
    const score = Math.floor(Math.random() * 101);
    const msg = `❤️ Compatibilité entre <@${from.split("@")[0]}> et <@${cible.split("@")[0]}> : *${score}%*`;
    await sock.sendMessage(m.key.remoteJid, { text: msg, mentions: [from, cible] }, { quoted: m });
  }
};
