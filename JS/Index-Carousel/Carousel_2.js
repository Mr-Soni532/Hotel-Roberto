let RoomTrack = document.querySelector(".room_carousel__track");
let roomSlides = Array.from(RoomTrack.children);
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");

let slideIndex = 1;
let roomSlideID;

// adding second slide
let clone_1 = roomSlides[0].cloneNode(true);
console.log(getComputedStyle(clone_1.children[0]).backgroundImage)
// clone_1.children[0].style.backgroundImage = "url(../../Resources/Home/carosel__1/2.jpg)"
clone_1.children[0].style.backgroundImage = `url(../Resources/Home/carosel__1/2.jpg)`;
let roomTitle = clone_1.children[1].children[0].children[0];
roomTitle.textContent = "Best King Room";
let roomPrice = clone_1.children[1].children[0].children[1];
roomPrice.innerHTML = " 125$ <span>/ Day</span>";
RoomTrack.append(clone_1);

roomSlides = Array.from(RoomTrack.children);

//inserting the first and last element's clone in the RoomTrack
let clone_firstSlide = roomSlides[0].cloneNode(true);
clone_firstSlide.id = "clone_firstSlide";
RoomTrack.append(clone_firstSlide);
let clone_secondSlide = roomSlides[1].cloneNode(true);
clone_secondSlide.id = "clone_secondfSlide";
RoomTrack.prepend(clone_secondSlide);

roomSlides = Array.from(RoomTrack.children);


//! Animation on/off function
const animationReset = () => {
  let CurrentRoomContent = roomSlides[slideIndex].children[1].children[0];
  let title = CurrentRoomContent.children[0];
  let price = CurrentRoomContent.children[1];
  let feature = CurrentRoomContent.children[2];
  let button = CurrentRoomContent.children[3];

  const reset = `transform: translateY(100px);
  transition-duration: 1s;
  opacity: 0`;

  title.style.cssText = reset;
  price.style.cssText = reset;
  feature.style.cssText = reset;
  button.style.cssText = reset;
};

const animationActive = () => {
  let CurrentRoomContent = roomSlides[slideIndex].children[1].children[0];
  let title = CurrentRoomContent.children[0];
  let price = CurrentRoomContent.children[1];
  let feature = CurrentRoomContent.children[2];
  let button = CurrentRoomContent.children[3];

  const active = `transform: unset;
  opacity: 1`;

  title.style.cssText = active;
  price.style.cssText = active;
  feature.style.cssText = active;
  button.style.cssText = active;
};

//! Moving slide
const moveRoomSlide = () => {
const roomSlideWidth = roomSlides[slideIndex].clientWidth;
  RoomTrack.style.transform =
    `translateX(-` + roomSlideWidth * slideIndex + `px)`;
    roomSlides[slideIndex].children[1].children[0].style.opacity = '1';
};
moveRoomSlide();
animationActive();
//Slide automation
const roomSlideAutomation = () => {
  roomSlideID = setInterval(() => {
    moveForward();
  }, 5000);
};
roomSlideAutomation();

//After transition
RoomTrack.addEventListener("transitionend", () => {
  if (roomSlides[slideIndex].id === clone_firstSlide.id) {
    slideIndex = 1;
    RoomTrack.style.transition = "none";
    moveRoomSlide();
  }
    animationActive();
  if (roomSlides[slideIndex].id === clone_secondSlide.id) {
    RoomTrack.style.transition = "none";
    slideIndex = roomSlides.length - 2;
    moveRoomSlide();
  }
    animationActive();
});

// //* Utility function ----------*---------*--------

const moveForward = () => {
  if (slideIndex >= roomSlides - 1) return;
  animationReset();
  roomSlides[slideIndex].children[1].children[0].style.opacity = '0';
  slideIndex++;
  moveRoomSlide();
  RoomTrack.style.transition = "1s";
};

const moveBackward = () => {
    animationReset();
  if (slideIndex <= 0) return;
  slideIndex--;
  RoomTrack.style.transition = "1s";
  moveRoomSlide();
};

// //* --------*-------------*---------*----------*---------*

// //! Right button function
nextBtn.addEventListener("click", (e) => {
  moveForward();
  clearInterval(roomSlideID);
  roomSlideAutomation();
});

// //! Left button function
previousBtn.addEventListener("click", (e) => {
  moveBackward();
  clearInterval(roomSlideID);
  roomSlideAutomation();
});

// console.log(roomSlides[slideIndex].children[1].children[0])