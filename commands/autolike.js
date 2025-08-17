export default {
  name: "autolike",
  description: "Active ou désactive les réactions automatiques",
  category: "fun",
  adminOnly: true,

  execute: async (sock, m, args) => {
    if (!args[0]) return m.reply("⚠️ Utilisation: .autolike on / off");

    const option = args[0].toLowerCase();
    if (option === "on") {
      global.db.data.autolike = true;
      m.reply("👍 Auto-like activé !");
    } else if (option === "off") {
      global.db.data.autolike = false;
      m.reply("👎 Auto-like désactivé !");
    }
  }
};
