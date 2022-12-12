const gallery1 = document.querySelector(".logo1");
const gallery2 = document.querySelector(".logo2");
const gallery3 = document.querySelector(".logo3");

var imagesArray1 = Array.from(gallery1.children);
var imagesArray2 = Array.from(gallery2.children);
var imagesArray3 = Array.from(gallery3.children);

function execute() {
  const randomIndex1 = Math.floor(Math.random() * 9);
  const randomIndex2 = Math.floor(Math.random() * 9);
  const randomIndex3 = Math.floor(Math.random() * 9);
  const target1 = imagesArray1[randomIndex1];
  const target2 = imagesArray2[randomIndex2];
  const target3 = imagesArray3[randomIndex3];
  target1.classList.add("active");
  setTimeout(() => {
    target2.classList.add("active");
  }, 100);
  setTimeout(() => {
    target3.classList.add("active");
  }, 200);
  console.log(target1 + "classlist added");
  setTimeout(() => {
    target1.classList.remove("active");
    setTimeout(() => {
      target2.classList.remove("active");
    }, 100);
    setTimeout(() => {
      target3.classList.remove("active");
    }, 200);
  }, 2990);
  setTimeout(execute, 3000);
}
execute();

let previousScrollPos = 0;
const header = document.querySelector("header");
// Keep track of the previous scroll position
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  console.log("last pos = " + previousScrollPos);

  if (window.scrollY < previousScrollPos) {
    if (!header.classList.contains("scrollup")) {
      header.classList.add("scrollup");
    }
  } else {
    header.classList.remove("scrollup");
  }
  previousScrollPos = window.scrollY;
});
