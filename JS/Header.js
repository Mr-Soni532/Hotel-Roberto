//! ----------hamburger
let hamburger = document.getElementById("hamburger");
let mobileNavpannel = document.getElementById("mobileNavPannel");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobileNavpannel.classList.toggle("now-active");
});

// //! ----------------------slide in close button
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => {
  mobileNavpannel.classList.remove("now-active");
  hamburger.classList.remove("is-active");
});

//! ------------Page list
let pageListInner = document.getElementById("page-list-inner");
let pageListButton = document.getElementById("pages-icon");
pageListButton.addEventListener("click", () => {
  pageListInner.classList.toggle("is-active");
  pageListInner.classList.toggle("open");
  dropdownList.classList.remove("is-active");
  dropdownList.classList.remove("open");
  dropdownButton.classList.remove("active")
  dropdownButton.style.backgroundColor = "#2c3e50"
  pageListButton.classList.toggle("active")
    if(pageListButton.classList.contains("active")){
      pageListButton.style.backgroundColor = "#27a360"
    }
    else{
      pageListButton.style.backgroundColor = "#2c3e50"
    }
});

//!-------------dropdown list
let dropdownList = document.getElementById("dropdownList");
let dropdownButton = document.getElementById("dropDownButton");
dropdownButton.addEventListener("click", () => {
  dropdownList.classList.toggle("is-active");
  dropdownButton.classList.toggle("active")
  dropdownList.classList.toggle("open");

    if(dropdownButton.classList.contains("active")){
      dropdownButton.style.backgroundColor = "#27a360"
    }
    else{
      dropdownButton.style.backgroundColor = "#2c3e50"
    }
});

//!---------------search pannel
let togelSearch = document.querySelector("[data-toggle-search]");
let searchPannel = document.getElementById("searchPannel");
togelSearch.addEventListener("click", () => {
  searchPannel.classList.toggle("search-pannel-active");
});
// ------mobileTogelSearch
let mobileTogelSearch = document.querySelector("[data-mobile-toggle-search]");
mobileTogelSearch.addEventListener("click", () => {
  searchPannel.classList.toggle("search-pannel-active");
});

//! side slide in menu
