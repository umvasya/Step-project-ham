function switchTabs() {
  let tabs = document.querySelector(".nav-services-items").children;
  let articles = document.querySelector(".service-content").children;

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {
      let activeTab = document.querySelector(".services-item-title.active");
      activeTab.classList.remove("active");
      event.target.classList.add("active");

      let activeData = document.querySelector("[data-active]");
      activeData.removeAttribute("data-active");
      let contents = document.querySelectorAll(".service-content > li");
      contents[i].setAttribute("data-active", "");
    });
  }
}

switchTabs();

const tabsFoto = document.querySelectorAll(".collection-title-item");
const wrapCard = document.querySelectorAll(".collection-gallery-card");
collectionTabsList.onclick = (e) => {
  let target = e.target;
  tabsFoto.forEach((elem) => {
    elem.classList.remove("active");
  });
  target.classList.add("active");
  let tabCategory = target.dataset.content;
  wrapCard.forEach((e) => {
    e.classList.add("hidden");
    let cardCategory = e.dataset.content;
    let loadAttr = e.getAttribute("data-load");
    if (tabCategory === "All" && loadAttr === null) {
      e.classList.remove("hidden");
    } else if (tabCategory === cardCategory && loadAttr === null) {
      e.classList.remove("hidden");
    }
  });
};

showCategory = () => {
  for (let i = 0; i < wrapCard.length; i++) {
    let show = wrapCard[i].querySelector(".img-card-category");
    show.textContent = wrapCard[i].dataset.content;
  }
};
showCategory();

morePhoto.onclick = () => {
  morePhoto.remove();
  const spinner = document.querySelector(".spinner");
  spinner.classList.add("spinner-active");
  setTimeout(() => {
    spinner.remove();
    wrapCard.forEach((e) => {
      e.removeAttribute("data-load");
    });
    tabsFoto.forEach((el) => {
      if (el.classList.contains("active")) {
        let a = el.getAttribute("data-content");
        wrapCard.forEach((element) => {
          let we = element.getAttribute("data-content");
          if (a === we) {
            element.classList.remove("hidden");
          } else if (a === "All") {
            element.classList.remove("hidden");
          }
        });
      }
    });
  }, 2000);
};

let currentSlide = 0;
const navigation = document.querySelectorAll(".slider-user-foto-small");
const slides = document.querySelectorAll(".slider-user-review");
const next = document.getElementById("arrowRight");
const previous = document.getElementById("arrowLeft");

for (let i = 0; i < navigation.length; i++) {
  navigation[i].onclick = function () {
    currentSlide = i;
    document
      .querySelector(".slider-user-review.review-wrapper.active")
      .classList.remove("active");
    document
      .querySelector(".slider-user-foto-small.active")
      .classList.remove("active");
    navigation[currentSlide].classList.add("active");
    slides[currentSlide].classList.add("active");
  };
}

next.onclick = function () {
  nextSlide(currentSlide);
};

previous.onclick = function () {
  previousSlide(currentSlide);
};

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  hideSlides();
  currentSlide = (n + slides.length) % slides.length;
  showSlides();
}

function hideSlides() {
  slides[currentSlide].className = "slider-user-review review-wrapper";
  navigation[currentSlide].className = "slider-user-foto-small";
}

function showSlides() {
  slides[currentSlide].className = "slider-user-review review-wrapper active";
  navigation[currentSlide].className = "slider-user-foto-small active";
}
