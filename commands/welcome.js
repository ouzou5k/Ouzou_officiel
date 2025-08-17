export default {
  name: "welcome",
  description: "Active ou désactive le message de bienvenue",
  category: "group",
  adminOnly: true,
  groupOnly: true,

  execute: async (sock, m, args) => {
    if (!args[0]) return m.reply("⚠️ Utilisation: .welcome on / off");

    const option = args[0].toLowerCase();
    if (option === "on") {
      global.db.data.welcome[m.chat] = true;
      m.reply("✅ Message de bienvenue activé !");
    } else if (option === "off") {
      global.db.data.welcome[m.chat] = false;
      m.reply("❌ Message de bienvenue désactivé !");
    } else {
      m.reply("⚠️ Utilisation: .welcome on / off");
    }
  }
};
