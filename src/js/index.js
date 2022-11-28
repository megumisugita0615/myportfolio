const ham = document.querySelector("#js-hamburger");
const navList = document.querySelector("#js-navlist");
const nav = document.querySelector("#js-nav");

ham.addEventListener("click", function () {
  ham.classList.toggle("header__nav__toggle-button--active");
  navList.classList.toggle("header__nav__list--active");
  nav.classList.toggle("header__nav--active");
});
