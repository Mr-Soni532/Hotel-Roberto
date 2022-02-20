
let third = document.getElementById("third");
window.addEventListener("scroll", () => {
  let scrollVal = window.pageYOffset;
  scrollVal *= 0.5;
  third.style.backgroundPositionY = "-" + (scrollVal - 270.25) + "px";
});


//! -------------pageTitle

//!----------------------------------------------


//* Parallax section

let parallax = document.querySelector("#parallax1")

window.addEventListener("scroll", () => {
    let offSet = window.pageYOffset;
    offSet = offSet * 0.5;
    offSet -= -94.25
    parallax.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
})