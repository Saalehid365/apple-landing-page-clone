const openSearch = document.querySelector("search-btn");

const hiddenNavs = document.querySelectorAll("nav-link");

document.getElementById("search").addEventListener("click", function () {
  hiddenNavs.classlist.add("nav-link").style.display = "none";
});
