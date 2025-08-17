export default {
  name: "dare",
  description: "Donne un défi à faire",
  category: "jeu",
  execute: async (sock, m) => {
    const dares = [
      "📸 Envoie ta dernière photo.",
      "🎤 Chante un son et envoie le vocal.",
      "😂 Mets un statut gênant pendant 10 minutes."
    ];
    const random = dares[Math.floor(Math.random() * dares.length)];
    await sock.sendMessage(m.key.remoteJid, { text: random }, { quoted: m });
  }
};
