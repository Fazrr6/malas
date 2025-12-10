async function getLyrics() {
    const artist = document.getElementById("artist").value;
    const title = document.getElementById("title").value;

    const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
    const data = await res.json();

    document.getElementById("result").textContent = data.lyrics || "Lirik tidak ditemukan!";
}

function copyText() {
    const text = document.getElementById("result").textContent;
    navigator.clipboard.writeText(text);
    alert("Lirik berhasil di-copy!");
}
