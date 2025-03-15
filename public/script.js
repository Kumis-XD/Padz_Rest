const apiData = {
	instagram: {
		title: "Instagram Downloader",
		description: "Mengambil link download dari postingan Instagram.",
		endpoint: "http://localhost:3000/api/download/instagram?url={URL}",
	},
	tiktok: {
		title: "TikTok Downloader",
		description: "Mengambil link download dari video TikTok.",
		endpoint: "http://localhost:3000/api/download/tiktok?url={URL}",
	},
	facebook: {
		title: "Facebook Downloader",
		description: "Mengambil link download dari video Facebook.",
		endpoint: "http://localhost:3000/api/download/facebook?url={URL}",
	},
	capcut: {
		title: "CapCut Downloader",
		description: "Mengambil link download dari template CapCut.",
		endpoint: "http://localhost:3000/api/download/capcut?url={URL}",
	},
	spotify: {
		title: "Spotify Downloader",
		description: "Mengambil link download dari lagu Spotify.",
		endpoint: "http://localhost:3000/api/download/spotify?url={URL}",
	},
	snapsave: {
		title: "Snapsave Downloader",
		description: "3 in one downloader (TikTok, Facebook, Instagram).",
		endpoint: "http://localhost:3000/api/download/snapsave?url={URL}",
	},
	youtube: {
		title: "YouTube Downloader",
		description: "Mengambil link download dari YouTube.",
		endpoint: "http://localhost:3000/api/download/youtube?url={URL}",
	},
	twitter: {
		title: "Twitter Downloader",
		description: "Mengambil link download dari Twitter.",
		endpoint: "http://localhost:3000/api/download/twitter?url={URL}",
	},
	threads: {
		title: "Threads Downloader",
		description: "Mengambil link download dari Threads.",
		endpoint: "http://localhost:3000/api/download/threads?url={URL}",
	},
	terabox: {
		title: "Terabox Downloader",
		description: "Mengambil link download dari Terabox.",
		endpoint: "http://localhost:3000/api/download/terabox?url={URL}",
	},
	soundcloud: {
		title: "SoundCloud Downloader",
		description: "Mengambil link download dari SoundCloud.",
		endpoint: "http://localhost:3000/api/download/soundcloud?url={URL}",
	},
	sfile: {
		title: "Sfile Downloader",
		description: "Mengambil link download dari Sfile.",
		endpoint: "http://localhost:3000/api/download/sfile?url={URL}",
	},
	pinterest: {
		title: "Pinterest Downloader",
		description: "Mengambil link download dari Pinterest.",
		endpoint: "http://localhost:3000/api/download/pinterest?url={URL}",
	},
	mediafire: {
		title: "MediaFire Downloader",
		description: "Mengambil link download dari MediaFire.",
		endpoint: "http://localhost:3000/api/download/mediafire?url={URL}",
	},
	gdrive: {
		title: "Google Drive Downloader",
		description: "Mengambil link download dari Google Drive.",
		endpoint: "http://localhost:3000/api/download/gdrive?url={URL}",
	},
	fbdl: {
		title: "Facebook Downloader",
		description: "Mengambil link download dari Facebook.",
		endpoint: "http://localhost:3000/api/download/fbdl?url={URL}",
	},
	youtubeSearch: {
		title: "YouTube Search",
		description: "Mencari video di YouTube.",
		endpoint: "http://localhost:3000/api/search/youtube?query={QUERY}",
	},
	wikipediaSearch: {
		title: "Wikipedia Search",
		description: "Mencari artikel di Wikipedia.",
		endpoint: "http://localhost:3000/api/search/wikipedia?query={QUERY}",
	},
	wikiImageSearch: {
		title: "Wiki Image Search",
		description: "Mencari gambar di Wikipedia.",
		endpoint: "http://localhost:3000/api/search/wikiImage?query={QUERY}",
	},
	unsplashSearch: {
		title: "Unsplash Search",
		description: "Mencari gambar di Unsplash.",
		endpoint: "http://localhost:3000/api/search/unsplash?query={QUERY}",
	},
	tiktokSearch: {
		title: "TikTok Search",
		description: "Mencari video di TikTok.",
		endpoint: "http://localhost:3000/api/search/tiktok?query={QUERY}",
	},
	spotifySearch: {
		title: "Spotify Search",
		description: "Mencari lagu di Spotify.",
		endpoint: "http://localhost:3000/api/search/spotify?query={QUERY}",
	},
	soundcloudSearch: {
		title: "SoundCloud Search",
		description: "Mencari lagu di SoundCloud.",
		endpoint: "http://localhost:3000/api/search/soundcloud?query={QUERY}",
	},
	sfileSearch: {
		title: "Sfile Search",
		description: "Mencari file di Sfile.",
		endpoint: "http://localhost:3000/api/search/sfile?query={QUERY}",
	},
	playstoreSearch: {
		title: "Playstore Search",
		description: "Mencari aplikasi di Playstore.",
		endpoint: "http://localhost:3000/api/search/playstore?query={QUERY}",
	},
	pinterestSearch: {
		title: "Pinterest Search",
		description: "Mencari gambar di Pinterest.",
		endpoint: "http://localhost:3000/api/search/pinterest?query={QUERY}",
	},
	npmSearch: {
		title: "NPM Search",
		description: "Mencari paket di NPM.",
		endpoint: "http://localhost:3000/api/search/npm?query={QUERY}",
	},
	librarySearch: {
		title: "Library Search",
		description: "Mencari perpustakaan.",
		endpoint: "http://localhost:3000/api/search/library?query={QUERY}",
	},
	appstoreSearch: {
		title: "Appstore Search",
		description: "Mencari aplikasi di Appstore.",
		endpoint: "http://localhost:3000/api/search/appstore?query={QUERY}",
	},
	quotly: {
		title: "Quotly Maker",
		description: "Membuat kutipan dari pesan.",
		endpoint: "http://localhost:3000/api/maker/quotly?message={MESSAGE}&username={USERNAME}&avatar={AVATAR}",
	},
	emojimix: {
		title: "Emojimix Maker",
		description: "Membuat kombinasi dua emoji.",
		endpoint: "http://localhost:3000/api/maker/emojimix?emoji1={EMOJI1}&emoji2={EMOJI2}",
	},
	carbonV2: {
		title: "Carbon V2 Maker",
		description: "Membuat gambar kode dari input.",
		endpoint: "http://localhost:3000/api/maker/carbonV2?input={INPUT}",
	},
	carbonV1: {
		title: "Carbon V1 Maker",
		description: "Membuat gambar kode dari input.",
		endpoint: "http://localhost:3000/api/maker/carbonV1?input={INPUT}",
	},
	bratVideo: {
		title: "Brat Video Maker",
		description: "Membuat video dari teks.",
		endpoint: "http://localhost:3000/api/maker/bratVideo?teks={TEKS}",
	},
	bratImage: {
		title: "Brat Image Maker",
		description: "Membuat gambar dari teks.",
		endpoint: "http://localhost:3000/api/maker/bratImage?teks={TEKS}",
	},
};

// Menampilkan detail API yang dipilih
function showDetails(api) {
	document.getElementById("api-details").style.display = "block";
	document.getElementById("api-title").innerText = apiData[api].title;
	document.getElementById("api-description").innerText =
		apiData[api].description;
	document.getElementById("api-endpoint").innerText = apiData[api].endpoint;
	document.getElementById("api-response").innerText = "";
	document.getElementById("api-input").dataset.api = api;
}

// Mencoba memanggil API berdasarkan URL yang dimasukkan
async function tryApi(api) {
	const responseBox = document.getElementById(api + "-response");

	let endpoint;
	if (api === 'quotly') {
		const message = document.getElementById(api + '-message').value;
		const username = document.getElementById(api + '-username').value;
		const avatar = document.getElementById(api + '-avatar').value;
		if (!message && !username && !avatar) {
			alert("Masukkan pesan, nama pengguna, dan avatar terlebih dahulu!");
			return;
		}
		endpoint = `http://localhost:3000/api/maker/quotly?message=${encodeURIComponent(message)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}`;
	} else if (api === 'emojimix') {
		const emoji1 = document.getElementById(api + '-emoji1').value;
		const emoji2 = document.getElementById(api + '-emoji2').value;
		if (!emoji1 && emoji2) {
			alert("Masukkan emoji terlebih dahulu!");
			return;
		}
		endpoint = `http://localhost:3000/api/maker/emojimix?emoji1=${encodeURIComponent(emoji1)}&emoji2=${encodeURIComponent(emoji2)}`;
	} else if (api === 'carbonV1' || api === 'carbonV2') {
		const input = document.getElementById(api + '-input').value;
		if (!input) {
			alert("Masukkan input terlebih dahulu!");
			return;
		}
		endpoint = `http://localhost:3000/api/maker/${api}?input=${encodeURIComponent(input)}`;
	} else if (api === 'bratImage' || api === 'bratVideo') {
		const teks = document.getElementById(api + '-teks').value;
		if (!teks) {
			alert("Masukkan teks terlebih dahulu!");
			return;
		}
		endpoint = `http://localhost:3000/api/maker/${api}?teks=${encodeURIComponent(teks)}`;
	} else if (apiData[api].endpoint.includes('/download/')) {
		const url = document.getElementById(api + "-url").value;
		if (!url) {
			alert("Masukkan URL terlebih dahulu!");
			return;
		}
		endpoint = `http://localhost:3000/api/download/${api}?url=${encodeURIComponent(url)}`;
	} else if (apiData[api].endpoint.includes('/search/')) {
		const query = document.getElementById(api + "-query").value;
		if (!query) {
			alert("Masukkan query terlebih dahulu!");
			return;
		}
		endpoint = apiData[api].endpoint.replace("{QUERY}", encodeURIComponent(query)) + ``;
	} else {
		alert("API tidak dikenali!");
		return;
	}

	// Tampilkan spinner Bootstrap
	responseBox.innerHTML = `
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
    `;

	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Error ${response.status}: ${response.statusText}`);
		}

		const data = await response.json();
		responseBox.innerHTML = `<pre class="border p-3 bg-light text-dark">${JSON.stringify(
			data,
			null,
			2,
		)}</pre>`;
	} catch (error) {
		responseBox.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ❌ Gagal mengambil data: ${error.message}
            </div>
        `;
	}
}
