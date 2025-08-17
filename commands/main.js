sock.ev.on("messages.upsert", async (m) => {
  if (global.db.data.autolike) {
    const msg = m.messages[0];
    if (!msg.key.fromMe) {
      await sock.sendMessage(msg.key.remoteJid, {
        react: { text: "👍", key: msg.key }
      });
    }
  }
});
