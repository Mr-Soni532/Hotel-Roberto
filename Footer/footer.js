let parallax = document.getElementById("parallax-scroll");
console.log(parallax);
window.addEventListener("scroll", () => {
  let val = window.pageYOffset * 0.5;
  parallax.style.backgroundPositionY = "-" + val + "px";
});
