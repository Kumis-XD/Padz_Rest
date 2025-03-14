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
	const urlInput = document.getElementById(api + "-url");
	const responseBox = document.getElementById(api + "-response");

	if (!urlInput.value) {
		alert("Masukkan URL terlebih dahulu!");
		return;
	}

	const endpoint = `http://localhost:3000/api/download/${api}?url=${encodeURIComponent(
		urlInput.value,
	)}`;

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
