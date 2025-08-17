export default {
  name: "math",
  description: "Calcule une opération mathématique",
  category: "utilitaires",
  execute: async (sock, m, args) => {
    if (!args[0]) return m.reply("⚠️ Exemple : .math 12*4");
    try {
      const result = eval(args.join(" "));
      await sock.sendMessage(m.key.remoteJid, { text: `🧮 Résultat : ${result}` }, { quoted: m });
    } catch {
      await sock.sendMessage(m.key.remoteJid, { text: "❌ Erreur de calcul" }, { quoted: m });
    }
  }
};
