export default {
  name: "anime",
  description: "Recherche un anime",
  category: "fun",
  execute: async (sock, m, args) => {
    const query = args.join(" ");
    if (!query) return await sock.sendMessage(m.key.remoteJid, { text: "⚠️ Entrez le nom de l’anime." }, { quoted: m });
    await sock.sendMessage(m.key.remoteJid, { text: `🔍 Recherche de l’anime : *${query}* ...` }, { quoted: m });
    // Option : connexion à une API d’anime
  }
};
