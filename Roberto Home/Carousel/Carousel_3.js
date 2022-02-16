//!----- Testimonial Image carousel
let testImageTrack = document.querySelector(".testimonial_image-track");
let imageSlides = Array.from(testImageTrack.children);
let imageIndex = 1;
let imageSlideId;

//inserting the first and last element"s clone the track
let image_clone1 = imageSlides[0].cloneNode(true);
image_clone1.id = "image_clone1";
let image_clone2 = imageSlides[imageSlides.length - 1].cloneNode(true);
image_clone2.id = "image_clone2";

testImageTrack.append(image_clone1);
testImageTrack.prepend(image_clone2);

let imageSlideWidth = imageSlides[imageIndex].clientWidth;
imageSlides = Array.from(testImageTrack.children);

//updating dot-navigation
const updatedot = () => {
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains("active")) {
      dots[i].classList.remove("active");
    }
  }
  for (let i = 0; i < dots.length; i++) {
    if (contentIndex == dots[i].dataset.value) {
      dots[i].classList.add("active");
      break;
    }
  }
};

//moving slides
const imageSlideMove = () => {
  testImageTrack.style.transform =
    `translateX(-` + imageSlideWidth * imageIndex + `px)`;
};
imageSlideMove();

// Slide automation
const imageSlideAutomation = () => {
  imageSlideId = setInterval(() => {
    nextImage();
  }, 5000);
};


// after transition function
testImageTrack.addEventListener("transitionend", () => {
  if (imageSlides[imageIndex].id === image_clone1.id) {
    imageIndex = 1;
    testImageTrack.style.transition = "none";
    imageSlideMove();
  }

  if (imageSlides[imageIndex].id === image_clone2.id) {
    testImageTrack.style.transition = "none";
    imageIndex = imageSlides.length - 2;
    imageSlideMove();
  }
});

// //* Utility function ----------*---------*--------

const nextImage = () => {
  if (imageIndex >= imageSlides - 1) return;
  imageIndex++;
  imageSlideMove();
  testImageTrack.style.transition = "1s";
};

const previousImage = () => {
  if (imageIndex <= 0) return;
  imageIndex--;
  testImageTrack.style.transition = "1s";
  imageSlideMove();
};
// //* --------*-------------*---------*----------*---------*

//! Testimonial content carousel

let testContentTrack = document.querySelector(".testimonial_content-track");
let contentSlide = Array.from(testContentTrack.children);
let dot_nav = document.querySelector(".testimonial_dot-nav");
let dots = Array.from(dot_nav.children);
let contentIndex = 1;
let contentSlideId;

// adding second testimonial
let content_Clone1 = contentSlide[0].cloneNode(true);
content_Clone1.children[0].textContent =
  "“This can be achieved by applying search engine optimization or popularly known as SEO. This is a marketing strategy which increases the quality and quantity of traffic flow to a particular website via search engines.”";
content_Clone1.children[1].children[1].children[0].textContent = "Downey Sarah";
testContentTrack.append(content_Clone1);
contentSlide = Array.from(testContentTrack.children);

//inserting the first and last element"s clone into track
let content_cloneFirst = contentSlide[0].cloneNode(true);
content_cloneFirst.id = "content_cloneFirst ";
let content_cloneLast = contentSlide[contentSlide.length - 1].cloneNode(true);
content_cloneLast.id = "content_cloneLast.id ";
testContentTrack.append(content_cloneFirst);
testContentTrack.prepend(content_cloneLast);
contentSlide = Array.from(testContentTrack.children);

let contentSlideWidth = contentSlide[contentIndex].clientWidth;

// moving content slide
const contentSlideMove = () => {
  updatedot();
  testContentTrack.style.transform =
    `translateX(-` + contentSlideWidth * contentIndex + `px)`;
};
contentSlideMove();

// Content Slide automation
const contentSlideAutomation = () => {
  contentSlideId = setInterval(() => {
    nextContent();
  }, 5000);
};
//   contentSlideAutomation();

testContentTrack.addEventListener("transitionend", () => {
  if (contentSlide[contentIndex].id === content_cloneFirst.id) {
    contentIndex = 1;
    testContentTrack.style.transition = "none";
    contentSlideMove();
  }
  if (contentSlide[contentIndex].id === content_cloneLast.id) {
    testContentTrack.style.transition = "none";
    contentIndex = contentSlide.length - 2;
    contentSlideMove();
  }
});

// //* Utility function ----------*---------*--------

const nextContent = () => {
  if (contentIndex >= contentSlide.length - 1) return;
  contentIndex++;
  contentSlideMove();
  testContentTrack.style.transition = "1s";
};

const previousContent = () => {
  if (contentIndex <= 0) return;
  contentIndex--;
  testContentTrack.style.transition = "1s";
  contentSlideMove();
};

//!----------------------- Dot Navigation

dot_nav.addEventListener("click", (e) => {
  let dotIndex = e.target.dataset.value;

  imageIndex = dotIndex;
  testImageTrack.style.transition = "1s";
  imageSlideMove();
  contentIndex = dotIndex;
  testContentTrack.style.transition = "1s";
  contentSlideMove();

  updatedot();
});

//!-----------Activating Both slide automaiton 
imageSlideAutomation();
contentSlideAutomation();