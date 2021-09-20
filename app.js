"use strict";
const slides = document.querySelectorAll(".slide");
const container = document.querySelector(".container");

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

container.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".slide")) {
    clearActiveClasses();
    target.classList.add("active");
  }
});
