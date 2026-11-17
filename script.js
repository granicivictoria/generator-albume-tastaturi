
function createAlbum() {
    let name = document.getElementById("albumName").value;

    if (name.trim() === "") {
        alert("Introdu numele albumului!");
        return;
    }

    let album = document.createElement("div");
    album.className = "album";

    let title = document.createElement("h3");
    title.textContent = name;

    album.appendChild(title);

    document.getElementById("albums").appendChild(album);

    document.getElementById("albumName").value = "";
}
