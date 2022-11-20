const openSearch = document.querySelector(".search-btn");

const navBarTags = document.getElementById("navlink");
const hiddenBar = document.getElementById("hidden-search");
const closeSearch = document.querySelector(".input-x");

document.getElementById("search").addEventListener("click", function () {
  navBarTags.classList.add("hidden");
  hiddenBar.classList.remove("hidden");
});

document
  .getElementById("hidden-search")
  .addEventListener("click", function (e) {
    const clicked = e.target.childElement(".input-x");
    navBarTags.classList.remove("hidden");
    hiddenBar.classList.add("hidden");
  });
