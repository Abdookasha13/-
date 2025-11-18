// ------------------------handle show box-------------------
const showAllBtn = document.querySelector(".show-all-btn button");
const hideBox = document.querySelector(".hide-box");

showAllBtn.addEventListener("click", function () {
  hideBox.classList.toggle("show-box");
  showAllBtn.innerHTML = hideBox.classList.contains("show-box")
    ? "إخفاء بعض الحالات"
    : "عرض جميع الحالات";
});

// -----------------------handle navbar---------------------
const header = document.querySelector(".header");
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight) {
    navBar.classList.add("sticky-nav");
  } else {
    navBar.classList.remove("sticky-nav");
  }
});

// ----------------handle form-------------------------
const form = document.querySelector(".contact-form");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  form.querySelectorAll(".error-msg").forEach((msg) => msg.remove());
  inputs.forEach((input) => input.classList.remove("input-error"));

  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, "هذا الحقل مطلوب");
      isValid = false;
    } else {
      if (input.type === "text") {
        if (input.value.trim().length < 3) {
          showError(input, "الاسم يجب أن يكون أكثر من 3 حروف");
          isValid = false;
        }
      }

      if (input.placeholder === "البريد الإلكتروني") {
        if (!validateEmail(input.value)) {
          showError(input, "البريد الإلكتروني غير صالح");
          isValid = false;
        }
      }

      if (input.tagName.toLowerCase() === "textarea") {
        if (input.value.trim().length < 10) {
          showError(input, "الرسالة يجب أن تكون أطول من 10 حروف");
          isValid = false;
        }
      }
    }
  });
  if (isValid) {
    const successMsg = document.createElement("div");
    successMsg.classList.add("success-msg");
    successMsg.innerText = "تم إرسال الرسالة بنجاح";
    form.appendChild(successMsg);
  }

  if (!isValid) e.preventDefault();
});

function showError(input, message) {
  input.classList.add("input-error");
  const error = document.createElement("div");
  error.classList.add("error-msg");
  error.innerText = message;
  input.insertAdjacentElement("afterend", error);
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

// ---------------------------dark mode------------------------
const darkModeToggle = document.querySelector(".dark-mode");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//-------------------------swiper---------------------------
const swiper = new Swiper(".brandSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 10 },
    576: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 4, spaceBetween: 25 },
  },
});
