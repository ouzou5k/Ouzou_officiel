module.exports = {
  name: "alive",
  description: "Vérifier si le bot est actif (Privé)",
  category: "fun",
  execute: async (sock, m, args) => {
    // Restreint au propriétaire uniquement
    if (m.key.participant !== process.env.YOUR_NUMBER + "@s.whatsapp.net") {
      return sock.sendMessage(m.key.remoteJid, { text: "⚠️ Commande réservée au propriétaire." });
    }

    await sock.sendMessage(m.key.remoteJid, {
      text: `🤖 Bot FLASH-MD est actif ✅\nNuméro : ${process.env.YOUR_NUMBER}\nMode privé`
    });
  }
};
