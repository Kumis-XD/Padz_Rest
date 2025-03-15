const express = require("express");
const cors = require("cors");
const path = require("path");
const padz = require("./utils/utils");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const users = [];
const apiKeys = new Map();

function generateApiKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

app.post("/api/register", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Username dan password diperlukan" });
    }

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: "Username sudah digunakan" });
    }

    const apiKey = generateApiKey();
    users.push({ username, password, apiKey });
    apiKeys.set(apiKey, username);

    res.json({ message: "Registrasi berhasil", apiKey });
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    try {
        const userData = JSON.parse(fs.readFileSync('./public/user/file.json', 'utf8'));

        if (userData.username !== username || userData.password !== password) {
            return res.status(400).json({ message: "Username atau password salah" });
        }

        res.json({ message: "Login berhasil", apiKey: userData.apiKey });
    } catch (error) {
        console.error('Error reading user data:', error);
        res.status(500).json({ message: "Terjadi kesalahan saat login" });
    }
});

app.post('/api/saveUserData', (req, res) => {
    try {
        // Extract the data from the request body
        const { username, password, apiKey } = req.body;

        // Create a new user data object
        const userData = { username, password, apiKey };

        // Convert the data to a JSON string
        const dataToSave = JSON.stringify(userData, null, 2);

        // Write the JSON string to a file (e.g., users.json)
        // Note: Be careful about where you write this file and how you handle permissions
        fs.writeFileSync('./public/user/file.json', dataToSave); // This will overwrite the file if it already exists

        // Send a success response back to the client
        res.status(200).json({ message: 'User data saved successfully' });
    } catch (error) {
        // Log the error to the console for debugging
        console.error('Error saving user data:', error);
        // Send an appropriate error response to the client
        res.status(500).json({ error: 'Failed to save user data', details: error.message });
    }
});

app.use((req, res, next) => {
    const apiKey = req.query.apiKey;
    if (!apiKey || !apiKeys.has(apiKey)) {
        return res.status(403).json({ message: "API key tidak valid" });
    }
    next();
});

app.get("/api/download/tiktok", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.ttdl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/youtube", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.ytdl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/spotify", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.spotifydl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/instagram", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.igdl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/snapsave", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.snap.download(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/capcut", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.ccdl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/twitter", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.twitter(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/threads", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.threads(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/terabox", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.terabox(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/soundcloud", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.soundcloud(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/sfile", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.sfileDl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/pinterest", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.pinterest(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/mediafire", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.mediafire(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/gdrive", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.gdrive(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/download/fbdl", async (req, res) => {
    const { url } = req.query;
    if (!url)
        return res
            .status(400)
            .json({ error: "Silakan masukkan URL yang ingin diunduh." });

    try {
        const result = await padz.fbdl(url);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mengunduh." });
    }
});

app.get("/api/search/youtube", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.youtubeSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/wikipedia", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.wikipediaSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/wikiImage", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.wikiImageSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/unsplash", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.unsplashSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/tiktok", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.tiktokSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/spotify", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.spotifySearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/soundcloud", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.soundcloudSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/sfile", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.sfileSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/playstore", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.playstoreSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/pinterest", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.pinterestSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/npm", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.npmSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/library", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.librarySearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/search/appstore", async (req, res) => {
    const { query } = req.query;
    if (!query)
        return res
            .status(400)
            .json({ error: "Silakan masukkan query yang ingin dicari." });

    try {
        const result = await padz.appstoreSearch(query);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat mencari." });
    }
});

app.get("/api/maker/quotly", async (req, res) => {
    const { message, username, avatar } = req.query;
    if (!message || !username)
        return res
            .status(400)
            .json({ error: "Silakan masukkan pesan dan nama pengguna." });

    try {
        const result = await padz.quotly(message, username, avatar);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat membuat kutipan." });
    }
});

app.get("/api/maker/emojimix", async (req, res) => {
    const { emoji1, emoji2 } = req.query;
    if (!emoji1 || !emoji2)
        return res
            .status(400)
            .json({ error: "Silakan masukkan dua emoji." });

    try {
        const result = await padz.emojimix(emoji1, emoji2);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat membuat emojimix." });
    }
});

app.get("/api/maker/carbonV2", async (req, res) => {
    const { input } = req.query;
    if (!input)
        return res
            .status(400)
            .json({ error: "Silakan masukkan kode yang ingin diubah." });

    try {
        const result = await padz.carbonV2(input);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat membuat carbonV2." });
    }
});

app.get("/api/maker/carbonV1", async (req, res) => {
    const { input } = req.query;
    if (!input)
        return res
            .status(400)
            .json({ error: "Silakan masukkan kode yang ingin diubah." });

    try {
        const result = await padz.carbonV1(input);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat membuat carbonV1." });
    }
});

app.get("/api/maker/bratVideo", async (req, res) => {
    const { teks } = req.query;
    if (!teks)
        return res
            .status(400)
            .json({ error: "Silakan masukkan teks yang ingin diubah." });

    try {
        const result = await padz.bratVideo(teks);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat membuat bratVideo." });
    }
});

app.get("/api/maker/bratImage", async (req, res) => {
    const { teks } = req.query;
    if (!teks)
        return res
            .status(400)
            .json({ error: "Silakan masukkan teks yang ingin diubah." });

    try {
        const result = await padz.bratImage(teks);
        res.json({ status: true, author: "Padz", data: result });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan saat membuat bratImage." });
    }
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di https://localhost:${port}`);
});
