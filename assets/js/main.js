/* Navigation Bar Function */

function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");
  const menu = document.querySelector("i.menu");
  const close = document.querySelector("i.close");
  // The className property of an element returns a space-separated list of the element’s class attributes as a string. This property can be used to add, remove, or toggle CSS classes on an element.
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
    menu.classList.add("hidden");
    close.classList.remove("hidden");
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* Add Shadow On Navigation Bar While Scrolling */

window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* Change Active Link */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Close menu when the close button is clicked

function closeMenu() {
  const menuBtn = document.getElementById("myNavMenu");
  const menu = document.querySelector("i.menu");
  const close = document.querySelector("i.close");

  menu.classList.remove("hidden");
  close.classList.add("hidden");
  menuBtn.classList.remove("responsive");
}

// Scroll = Hide menu

window.onscroll = function () {
  document.getElementById("myNavMenu").classList.remove("responsive");
  const menu = document.querySelector("i.menu");
  const close = document.querySelector("i.close");
  menu.classList.remove("hidden");
  close.classList.add("hidden");
};
