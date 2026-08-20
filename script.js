// Menu tabs
document.querySelectorAll(".tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tab").forEach(function (t) { t.classList.remove("active"); });
    document.querySelectorAll(".menu-panel").forEach(function (p) { p.classList.remove("active"); });
    tab.classList.add("active");
    document.getElementById("panel-" + tab.dataset.tab).classList.add("active");
  });
});

// Mobile nav
var burger = document.getElementById("navBurger");
var links = document.getElementById("navLinks");
burger.addEventListener("click", function () { links.classList.toggle("open"); });
links.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () { links.classList.remove("open"); });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
