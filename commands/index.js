sock.ev.on("group-participants.update", async (anu) => {
  if (anu.action === "add" && global.db.data.welcome[anu.id]) {
    const user = anu.participants[0];
    const text = `👋 Bienvenue <@${user.split("@")[0]}> dans le groupe 🎉 !`;
    await sock.sendMessage(anu.id, { text, mentions: [user] });
  }
});
