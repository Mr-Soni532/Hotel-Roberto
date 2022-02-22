


//!---------------------Pagination---------------
let pagination = document.getElementById("pagi");
let pagLi = pagination.querySelectorAll("li > a");
pagLi.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("pag-active");
    // console.log(el)
  });
});

let doc = document.body;
doc.addEventListener("click", (e) => {
  let pagTarget = e.target.classList.contains("pag-btn");
  if (!pagTarget) {
    pagLi[0].classList.remove("pag-active");
    pagLi[1].classList.remove("pag-active");
    pagLi[2].classList.remove("pag-active");
    pagLi[3].classList.remove("pag-active");
  }
});