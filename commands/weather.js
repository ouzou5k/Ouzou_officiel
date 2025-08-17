export default {
  name: "weather",
  description: "Donne une météo simple (fictive)",
  category: "info",
  execute: async (sock, m, args) => {
    const city = args.join(" ") || "Bamako";
    const fakeWeather = [
      "☀️ Ensoleillé",
      "🌧️ Pluvieux",
      "⛅ Nuageux",
      "⚡ Orageux",
      "❄️ Neigeux"
    ];
    const random = fakeWeather[Math.floor(Math.random() * fakeWeather.length)];
    await sock.sendMessage(m.key.remoteJid, { text: `📍 Météo de ${city} : ${random}` }, { quoted: m });
  }
};
