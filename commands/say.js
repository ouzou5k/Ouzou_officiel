export default {
  name: "say",
  description: "Répète ce que vous écrivez",
  category: "fun",
  execute: async (sock, m, args) => {
    const text = args.join(" ");
    if (!text) return await sock.sendMessage(m.key.remoteJid, { text: "⚠️ Écris quelque chose après .say" }, { quoted: m });
    await sock.sendMessage(m.key.remoteJid, { text }, { quoted: m });
  }
};
