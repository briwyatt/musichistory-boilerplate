
var listLink = document.getElementById("view-music-link");
var listView = document.getElementById("list-music-page");
var addLink = document.getElementById("add-music-link");
var addView = document.getElementById("centeredEl");

listLink.addEventListener("click", function(e) {
  addView.classList.add("hidden");

  listView.classList.remove("hidden");
  listView.classList.add("visible");
});

