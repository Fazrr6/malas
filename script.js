async function getLyrics() {
    const artist = document.getElementById("artist").value;
    const title = document.getElementById("title").value;

    const query = `${artist} ${title}`;

    const res = await fetch(`https://some-random-api.com/lyrics?title=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (data.error) {
        document.getElementById("result").textContent = "Lirik tidak ditemukan!";
        return;
    }

    document.getElementById("result").textContent = data.lyrics;
}
