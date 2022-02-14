const track = document.querySelector(".carousel__track");
let slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const previousButton = document.querySelector(".carousel__button--left");
let index = 1;
let slideId;

//inserting the first and last element's clone the track
let firstClone = slides[0].cloneNode(true);
let lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";
track.append(firstClone);
track.prepend(lastClone);

const slideWidth = slides[index].clientWidth;  

//Slide move 
const moveSlide = () => {
  track.style.transform = `translateX(-` + slideWidth * index + `px)`;
  slides[index].children[0].children[0].style.opacity = '1'
};

//?-----Brute force Contnet Animation code
const reset = ()=>{
  let h6 = slides[index].children[0].children[0].children[0];
  let h1 = slides[index].children[0].children[0].children[1];
  let Btn = slides[index].children[0].children[0].children[2];
  
  const h6_reset = `transform: translateX(-100px);
  transition-duration: 1s; 
  opacity: 0`;
  const h1_reset = `transform: translateY(-100px);
  transition-duration: 1s;
  opacity: 0`;
  const Btn_reset = `transform: translateY(100px);
  transition-duration: 1s;
  opacity: 0`;
  
  h6.style.cssText = h6_reset;
  h1.style.cssText = h1_reset;
  Btn.style.cssText = Btn_reset;
}
const contentAnimation = ()=>{
  let h6 = slides[index].children[0].children[0].children[0];
  let h1 = slides[index].children[0].children[0].children[1];
  let Btn = slides[index].children[0].children[0].children[2];

  const is_active = "opacity:1; transform:unset";
  h6.style.cssText = is_active;
  h1.style.cssText = is_active;
  Btn.style.cssText = is_active;
}
//?--------------------------------------

moveSlide(); // Initial transform form 0 -> 1 slide
contentAnimation();
// updating slides after inserting clone elements
slides = Array.from(track.children);

// Slide automation
const slideAutomation = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, 5000);
};

// runs after every transition is done on track
track.addEventListener("transitionend", () => {
  if (slides[index].id === firstClone.id) {
    slides[index].classList.remove("current-slide");
    index = 1;
    slides[index].classList.add("current-slide");
    track.style.transition = "none";
    moveSlide();
  }

  // Content Animation
  contentAnimation();

  //! updating right button image
  updateRightButton();

  if (slides[index].id === lastClone.id) {
    track.style.transition = "none";
    index = slides.length - 2;
    moveSlide();
  }

  //! updating left button image
  updateLeftButton();
  contentAnimation();
});
  slideAutomation();

// //* Utility function ----------*---------*--------

const moveToNextSlide = () => {
  reset();
  if (index >= slides.length - 1) return;
  slides[index].children[0].children[0].style.opacity = '0'
  reset();
  index++;
  moveSlide();
  track.style.transition = "1s";
  // slides[index].classList.add("current-slide");
  // const previousSlide = slides[index].previousElementSibling;
  // previousSlide.classList.remove("current-slide");
};

const moveToPreviousSlide = () => {
  reset();
  if (index <= 0) return;
  index--;
  track.style.transition = "1s";
  moveSlide();
};

const updateRightButton = () => {
  const nextSlide = slides[index].nextElementSibling;
  const bg = getComputedStyle(nextSlide).backgroundImage;
  nextButton.style.transition = "1s";
  nextButton.style.backgroundImage = bg;
};

const updateLeftButton = () => {
  const previousSlide = slides[index].previousElementSibling;
  const bg = getComputedStyle(previousSlide).backgroundImage;
  previousButton.style.transition = "1s";
  previousButton.style.backgroundImage = bg;
};

// //* --------*-------------*---------*----------*---------*

// //! Right button function
nextButton.addEventListener("click", (e) => {
  moveToNextSlide();
  clearInterval(slideId);
  slideAutomation();
});

// //! Left button function
previousButton.addEventListener("click", (e) => {
  moveToPreviousSlide();
  clearInterval(slideId);
  slideAutomation();
});

