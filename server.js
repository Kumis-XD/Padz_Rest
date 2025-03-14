const express = require("express");
const cors = require("cors");
const path = require("path");
const padz = require("./utils/utils");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/download/tiktok", async (req, res) => {
	const { url } = req.query;
	if (!url)
		return res
			.status(400)
			.json({ error: "Silakan masukkan URL yang ingin diunduh." });

	const result = await padz.ttdl(url);
	res.json({ status: true, author: "Padz", data: result });
});

app.get("/api/download/youtube", async (req, res) => {
	const { url } = req.query;
	if (!url)
		return res
			.status(400)
			.json({ error: "Silakan masukkan URL yang ingin diunduh." });

	const result = await padz.ytdl(url);
	res.json({ status: true, author: "Padz", data: result });
});

app.get("/api/download/spotify", async (req, res) => {
	const { url } = req.query;
	if (!url)
		return res
			.status(400)
			.json({ error: "Silakan masukkan URL yang ingin diunduh." });

	const result = await padz.spotifydl(url);
	res.json({ status: false, author: "Padz", data: result });
});

app.get("/api/download/instagram", async (req, res) => {
	const { url } = req.query;
	if (!url)
		return res
			.status(400)
			.json({ error: "Silakan masukkan URL yang ingin diunduh." });

	const result = await padz.igdl(url);
	res.json({ status: false, author: "Padz", data: result });
});

app.get("/api/download/capcut", async (req, res) => {
	const { url } = req.query;
	if (!url)
		return res
			.status(400)
			.json({ error: "Silakan masukkan URL yang ingin diunduh." });

	const result = await padz.ccdl(url);
	res.json({ status: false, author: "Padz", data: result });
});

// Jalankan server
app.listen(port, () => {
	console.log(`Server berjalan di https://localhost:${port}`);
});
