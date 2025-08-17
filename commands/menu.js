export default {
  name: "menu",
  description: "Affiche toutes les commandes disponibles",
  category: "info",
  execute: async (sock, m, args) => {
    const menu = [
      "🤖 *Ouzou_officiel Bot*",
      "",
      "📌 Commandes disponibles :",
      ".ping - Test du bot",
      ".love @user - Compatibilité love",
      ".luck @user - Chance du jour",
      ".menu - Affiche ce menu"
    ].join("\n");
    await sock.sendMessage(m.key.remoteJid, { text: menu }, { quoted: m });
  }
};
