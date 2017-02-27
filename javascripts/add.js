var listLink = document.getElementById("view-music-link");
var listView = document.getElementById("list-music-page");
var addLink = document.getElementById("add-music-link");
var addView = document.getElementById("centeredEl");

addLink.addEventListener("click", function(e) {
  listView.classList.add("hidden");

  addView.classList.remove("hidden");
  addView.classList.add("visible");
});

