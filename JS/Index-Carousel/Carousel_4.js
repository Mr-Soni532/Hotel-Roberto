let projectTrack = document.querySelector(".project_track");
let projectSlide = Array.from(projectTrack.children);
let projectIndex = 0;

// cloning slides for current display
let project_clone1 = projectSlide[0].cloneNode(true);
project_clone1.style.backgroundImage =
`url(../Resources/Home/project/2.webp)`;
let project_clone2 = projectSlide[0].cloneNode(true);
project_clone2.style.backgroundImage =
`url(../Resources/Home/project/3.webp)`;
let project_clone3 = projectSlide[0].cloneNode(true);
project_clone3.style.backgroundImage =
`url(../Resources/Home/project/4.webp)`;
let project_clone4 = projectSlide[0].cloneNode(true);
project_clone4.style.backgroundImage =
`url(../Resources/Home/project/5.webp)`;

projectTrack.append(project_clone1);
projectTrack.append(project_clone2);
projectTrack.append(project_clone3);
projectTrack.append(project_clone4);
projectSlide = Array.from(projectTrack.children);

//cloning slides
let clone___1 = projectSlide[0].cloneNode(true);
let clone___2 = projectSlide[1].cloneNode(true);
let clone___3 = projectSlide[2].cloneNode(true);
let clone___4 = projectSlide[3].cloneNode(true);
projectTrack.append(clone___1);
projectTrack.append(clone___2);
projectTrack.append(clone___3);
projectTrack.append(clone___4);
projectSlide = Array.from(projectTrack.children);

// Moving slide
const moveProjectSlide = () => {
  const projectSlideWidth = projectSlide[projectIndex].clientWidth;
  projectTrack.style.transform =
    `translateX(-` + projectSlideWidth * projectIndex + `px)`;
};

// Slide automation
const projectSlideAutomation = () => {
  setInterval(() => {
    nextProject();
  }, 3000);
};
projectSlideAutomation();

projectTrack.addEventListener("transitionend", () => {
  if (projectIndex == 5) {
    projectIndex = 0;
    projectTrack.style.transition = "none";
    moveProjectSlide();
  }
});

// //* Utility function ----------*---------*--------
const nextProject = () => {
  projectIndex++;
  projectTrack.style.transition = "1s";
  moveProjectSlide();
};
