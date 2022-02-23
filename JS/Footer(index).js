let ContactUs_Parallax = document.querySelector("#contactUs-Parallax");
window.addEventListener("scroll", () => {
  let val = window.pageYOffset;
  val = val * 0.5;
  val -= 2000.25;
  ContactUs_Parallax.style.transform = `translate3d(0px, -${val}px, 0px)`;
});
