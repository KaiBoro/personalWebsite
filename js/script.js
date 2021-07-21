'use strict';

AOS.init();

const navigationEl = document.querySelector(".js--navigation");

// Open Menu
function openMenu() {
  navigationEl.style.display = "block";
  navigationEl.classList.add("active");
  navigationEl.classList.remove("inactive");
}

// Close Menu
function closeMenu() {
  navigationEl.classList.remove("active");
  navigationEl.classList.add("inactive");
  setTimeout(function() {
    navigationEl.style.display = "none";
  }, 1000);

}
