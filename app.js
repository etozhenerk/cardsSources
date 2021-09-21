"use strict";
const slidesPlugin = (acrive = 0) => {
  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".container");

  slides[acrive].classList.add('active');

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
};

slidesPlugin(0);