const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    btn.classList.add("active");
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(
    ".experience-item, .skills-category, .bio, .profile-img"
  );

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].style.opacity = "1";
      reveals[i].style.transform = "translateY(0)";
    }
  }
}

document
  .querySelectorAll(".experience-item, .skills-category, .bio, .profile-img")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
  });

window.addEventListener("load", reveal);

const sections = document.querySelectorAll("section");
const navLinksItems = document.querySelectorAll(".nav-links a");

function setActiveNav() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinksItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
  if (window.scrollY === 0) {
    navbar.classList.add("top");
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
    navbar.classList.remove("top");
  }
}

window.addEventListener("scroll", handleNavbarScroll);

// Jalankan sekali di awal untuk posisi awal
handleNavbarScroll();
