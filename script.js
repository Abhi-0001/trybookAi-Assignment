const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".main-nav");
const navClose = document.querySelector(".nav-btn-close");

navBtn.addEventListener("click", function () {
  console.log("menu clicked");
  nav.classList.add("nav-open");
  navBtn.classList.add("nav-open");
  navClose.classList.add("nav-open");
});

navClose.addEventListener("click", function () {
  console.log("close clicked");
  nav.classList.remove("nav-open");
  navBtn.classList.remove("nav-open");
  navClose.classList.remove("nav-open");
});
