export default {
  name: "weather",
  description: "Donne la météo d’une ville",
  category: "info",
  execute: async (sock, m, args) => {
    const city = args.join(" ") || "Bamako";
    const msg = `☀️ Météo à ${city} : 30°C, ensoleillé (exemple)`;
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
