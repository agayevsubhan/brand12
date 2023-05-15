const btnBar = document.querySelector(".btn-br");
const myBottom = document.querySelector(".myBottom");
const btnRemov = document.querySelector(".btn");
const navBars = document.querySelector(".select");
const myIcon = document.querySelector(".initial");
const myLeft = document.querySelector(".myLeft");
const linkMenu = document.querySelector(".menu");

btnBar.addEventListener("click", function () {
  navBars.classList.add("displayClass");
});
btnRemov.addEventListener("click", function () {
  navBars.classList.remove("displayClass");
});

myBottom.addEventListener("click", function () {
  myBottom.classList.toggle("myTop");
  myIcon.classList.toggle("displayUl");
});
myLeft.addEventListener("click", function () {
  myLeft.classList.toggle("myTop");
  linkMenu.classList.toggle("displayUl");
});