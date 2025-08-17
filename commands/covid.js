export default {
  name: "covid",
  description: "Infos COVID (Mali exemple)",
  category: "info",
  execute: async (sock, m, args) => {
    const msg = "🦠 COVID-19 Mali : 35 000 cas, 1 000 décès (exemple)";
    await sock.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m });
  }
};
