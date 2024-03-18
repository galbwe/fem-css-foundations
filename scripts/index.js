function openNav() {
  const nav = document.querySelector(".nav");
  const close = document.querySelector(".close");
  nav.classList.add("nav--visible");
  close.classList.add("close--show");
}

function closeNav() {
  const nav = document.querySelector(".nav");
  const close = document.querySelector(".close");
  nav.classList.remove("nav--visible");
  close.classList.remove("close--show");
}

function hideMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu--hide");
}

function showMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.remove("menu--hide");
}

function makeMenuIconClickable() {
  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    openNav();
    hideMenu();
  });
}

function makeCloseIconClickable() {
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    closeNav();
    showMenu();
  });
}

function main() {
  makeMenuIconClickable();
  makeCloseIconClickable();
}

main();
