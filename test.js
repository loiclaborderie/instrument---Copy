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
const header = document.querySelector("header");
let previousScrollPos = 0;

let timeoutId;

window.addEventListener("scroll", function () {
  // Toggle the 'scrolldown' class based on whether the user is scrolling down
  header.style.animation = "posOn";
  header.style.animationDuration = "0.5s";
  header.classList.toggle("scrolldown", window.scrollY > previousScrollPos);
  previousScrollPos = window.scrollY;

  // Clear the timeout if it has been set
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Set a timeout to remove the 'scrolldown' class after 500ms
  timeoutId = setTimeout(function () {
    header.classList.remove("scrolldown");
  }, 500);
});

// Add an event listener for the 'touchmove' event, which is triggered
// when the user moves their finger on a touch screen
window.addEventListener("touchmove", function () {
  header.classList.add("scrolldown");
});

// Add an event listener for the 'touchend' event, which is triggered
// when the user lifts their finger off the screen
window.addEventListener("touchend", function () {
  header.classList.remove("scrolldown");
});
