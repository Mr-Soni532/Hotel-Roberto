// !/-------- Availability form dropdown buttons

//!-----------Room count 
let roomSelected = document.getElementById("selected-room");
let optionContainer = document.querySelector("#option-container-room");
const optionList = optionContainer.querySelectorAll(".option");
let selectedRoomCount = document.querySelector("#selected-room-count");
roomSelected.addEventListener("click", () => {
  optionContainer.classList.toggle("active");
  roomSelected.classList.toggle("select-active");
});
optionList.forEach((el) => {
  el.addEventListener("click", () => {
    selectedRoomCount.textContent = el.querySelector("label").innerHTML;
    optionContainer.classList.remove("active");
    roomSelected.classList.toggle("select-active");
  });
});

//!-----------adult count 
let adultSelected = document.getElementById("selected-adult");
let optionContainer2 = document.querySelector("#option-container-adult");
const optionList2 = optionContainer2.querySelectorAll(".option");
let selectedAdultCount = document.querySelector("#selected-adult-count");
adultSelected.addEventListener("click", () => {
  optionContainer2.classList.toggle("active");
  adultSelected.classList.toggle("select-active");
});
optionList2.forEach((el) => {
  el.addEventListener("click", () => {
    selectedAdultCount.textContent = el.querySelector("label").innerHTML;
    optionContainer2.classList.remove("active");
    adultSelected.classList.toggle("select-active");
  });
});

//!-----------children count 
let childrenSelect = document.getElementById("selected-children");
let optionContainer3 = document.querySelector("#option-container-children");
const optionList3 = optionContainer3.querySelectorAll(".option");
let selectedChildrenCount = document.querySelector("#selected-children-count");
childrenSelect.addEventListener("click", () => {
  optionContainer3.classList.toggle("active");
  childrenSelect.classList.toggle("select-active");
});
optionList3.forEach((el) => {
  el.addEventListener("click", () => {
    selectedChildrenCount.textContent = el.querySelector("label").innerHTML;
    optionContainer3.classList.remove("active");
    childrenSelect.classList.toggle("select-active");
  });
});


