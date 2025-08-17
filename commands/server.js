import express from "express";
import qrcode from "qrcode";
import makeWASocket, { useMultiFileAuthState, fetchLatestBaileysVersion } from "@whiskeysockets/baileys";

const app = express();
const port = 3000;

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("auth");
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: false
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    if (update.qr) {
      qrcode.toDataURL(update.qr, (err, url) => {
        if (err) return console.log(err);
        app.get("/", (req, res) => {
          res.send(`<h1>Scanner le QR</h1><img src="${url}" />`);
        });
      });
    }

    if (update.connection === "open") {
      console.log("✅ Connecté à WhatsApp !");
    }
  });
}

startBot();

app.listen(port, () => console.log(`Serveur QR: http://localhost:${port}`));
