let menuKnop = document.querySelector(".menuicoon");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
let naam = document.querySelector("h1");
function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
mainGedeelte.addEventListener("mouseover",verbergMenu);
naam.addEventListener("mouseover",verbergMenu)
function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("mouseover",toonMenu);

function scrollWin() {
  window.scrollTo(0, 2500);
}

function scrollWin2() {
  window.scrollTo(0, 420);
}

function scrollWin3() {
  window.scrollTo(0, 800);
}
