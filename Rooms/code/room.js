let inputLeft = document.getElementById("input-left");
let inputRight = document.getElementById("input-right");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let thumbLeft = document.querySelector(".slider > .thumb.left");
let thumbRight = document.querySelector(".slider > .thumb.right");
let range = document.querySelector(".slider > .range");

function setLeftValue() {
  let _this = inputLeft,
    min = parseInt(_this.min);
  max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 2);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  displayValOne.textContent = parseInt(_this.value);
}
setLeftValue();
function setRightValue() {
  let _this = inputRight,
    min = parseInt(_this.min);
  max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 2);
  let percent = ((_this.value - min) / (max - min)) * 100;
  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
  displayValTwo.textContent = parseInt(_this.value);
}
setRightValue();
inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// //! Active effect for left thumb

inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});
// //! Active effect for Right thumb
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});

//! ------------ Guest -------------

//  ----------------Adults----------------
let selected = document.querySelector("#selected-1");
let optionContainer = document.querySelector("#option-container-1");
const optionList = optionContainer.querySelectorAll(".option");
selected.addEventListener("click", () => {
  optionContainer.classList.toggle("active");
  selected.classList.toggle("select-active");
});
optionList.forEach((el) => {
  el.addEventListener("click", () => {
    selected.innerHTML = el.querySelector("label").innerHTML;
    optionContainer.classList.remove("active");
    selected.classList.toggle("select-active");
  });
});

//  ----------------Children----------------
let selected2 = document.querySelector("#selected-2");
let optionContainer2 = document.querySelector("#option-container-2");
const optionList2 = document.querySelectorAll("#option-container-2 > .option");

let label = document.querySelector("#d2 > label");

selected2.addEventListener("click", () => {
  optionContainer2.classList.toggle("active");
  selected2.classList.toggle("select-active");
});
let count = 0;
optionList2.forEach((el) => {
  el.addEventListener("click", () => {
    selected2.innerHTML = el.querySelector("label").innerHTML;
    optionContainer2.classList.remove("active");
    selected2.classList.remove("select-active");
  });
});
selected2.addEventListener("blur", () => {
  console.log("Yes");
  optionContainer2.classList.remove("active");
});
//!------//---------class_remover-------//------//

let doc = document.body;
doc.addEventListener("click", (e) => {
  // console.log(e.target);
  //? --------------------Guest count list-------------------------------
  let adultTarget = e.target.classList.contains("guest-adult");
  // console.log(adultTarget)
  if (!adultTarget) {
    optionContainer.classList.remove("active");
    selected.classList.remove("select-active");
  }
  let childTarget = e.target.classList.contains("guest-child");
  // console.log(childTarget)
  if (!childTarget) {
    optionContainer2.classList.remove("active");
    selected2.classList.remove("select-active");
  }
  //? Pagination -----------------------//
  let pagTarget = e.target.classList.contains("pag-btn");
  if (!pagTarget) {
    pagLi[0].classList.remove("pag-active");
    pagLi[1].classList.remove("pag-active");
    pagLi[2].classList.remove("pag-active");
    pagLi[3].classList.remove("pag-active");
  }
});
//!---------------------Pagination---------------
let pagination = document.getElementById("pagi");
let pagLi = pagination.querySelectorAll("li > a");
pagLi.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("pag-active");
    // console.log(el)
  });
});
