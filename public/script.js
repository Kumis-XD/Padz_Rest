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
    youtube: {
        title: "Youtube Downloader",
        description: "Mengambil link download dari Youtube.",
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
    const url = document.getElementById(api + "-url").value;
    if (!url) return alert("Masukkan URL terlebih dahulu!");

    const endpoint = `http://localhost:3000/api/download/${api}?url=${encodeURIComponent(
        url,
    )}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        document.getElementById(api + "-response").innerText = JSON.stringify(
            data,
            null,
            2,
        );
    } catch (error) {
        document.getElementById(api + "-response").innerText =
            error;
    }
}