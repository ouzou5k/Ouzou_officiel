export default {
  name: "calc",
  description: "Fait un calcul basique",
  category: "utilitaires",
  execute: async (sock, m, args) => {
    try {
      if (!args[0]) return m.reply("⚠️ Exemple : .calc 5+5");
      const result = eval(args.join(" "));
      await sock.sendMessage(m.key.remoteJid, { text: `🧮 Résultat : ${result}` }, { quoted: m });
    } catch {
      await sock.sendMessage(m.key.remoteJid, { text: "❌ Erreur de calcul" }, { quoted: m });
    }
  }
};
