
let parallax2 = document.querySelector("#parallax2")

window.addEventListener("scroll", () => {
    let offSet = window.pageYOffset;
    offSet = offSet * 0.5;
    offSet -= 106.25
    parallax2.style.transform = `translate3d(0px, -${offSet}px, 0px)`;
})