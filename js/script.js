///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
///////////////////////////////////////////////////////////
// Scroll Animation

AOS.init({
  duration: 1000, 
  once: true, 
});

///////////////////////////////////////////////////////////
// Button to top

const btnTop = document.getElementById("btn-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

///////////////////////////////////////////////////////////
// Form Validation

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector("#cta-email").value;
  if (!email.includes("@")) {
    alert("❌ لطفاً ایمیل معتبر وارد کنید");
  } else {
    alert("✅ سفارش شما ثبت شد!");
  }
});
///////////////////////////////////////////////////////////
// Dark/Light Mode

const btnTheme = document.getElementById("btn-theme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // تغییر آیکون
  const icon = btnTheme.querySelector("ion-icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.setAttribute("name", "moon"); // 🌙
  } else {
    icon.setAttribute("name", "sunny"); // 🌞
  }
});

   ///////////////////////////////////////////////////////
// botton-sign-up 

document.getElementById("signup-btn").addEventListener("click", () => {
  window.location.href = "https://dev-27uradi1nhb46goz.us.auth0.com/authorize?client_id=RdVkDBf94wKPW7CM3Epb8t9FjD0bLx4G&response_type=code&scope=openid%20profile%20email&redirect_uri=https://nrgfront.github.io/Omnifood-project/&screen_hint=signup";
});


////////////////////////////////////////////////////
    //  JS Popup + Auth0 Redirect 
   
      const startBtn = document.getElementById("start-btn");
      const popup = document.getElementById("popup-form");
      const closeBtn = document.querySelector(".close-btn");
      const formPopup = document.getElementById("form-popup");

      // Open popup
      startBtn.addEventListener("click", () => {
        popup.style.display = "flex";
      });

      // Close popup with X
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
      });

      // Close popup by clicking outside
      popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
      });


// On form submit → redirect to meals.html
formPopup.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const goal = document.getElementById("goal").value;

  console.log({ height, weight, goal }); // 

  //to meals.html
  window.location.href = "meals.html";
});




///////////////////////////////////////////////////////////
// MORE-MEALS-HEADER

// Mobile menu toggle
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Dropdown toggle (for mobile)
const dropdown = document.querySelector(".dropdown > a");
const dropdownParent = dropdown.parentElement;

dropdown.addEventListener("click", function (e) {
  e.preventDefault();
  dropdownParent.classList.toggle("open");
});




