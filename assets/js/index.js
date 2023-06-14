const images = [...document.querySelectorAll(".image")];

// popup

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// const elementId = document.getElementById("header");

// LOAD NAVBAR/HEADER & FOOTER

function loadHTML(url, elementId) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById(elementId).innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

loadHTML("header.html", "header");
loadHTML("footer.html", "footer");
// END THIS LOAD

let index = 0; // will track our current image;

$(".this-carousel .owl-carousel").owlCarousel({
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
  });
});

const updateImage = (i) => {
  let path = `work-images/image${i + 1}.jpg`;
  let iName = `Our Work ${i + 1}`;
  largeImage.src = path;
  imageName.innerHTML = iName;
  imageIndex.innerHTML = `0${i + 1}`;
  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});

leftArrow.addEventListener("click", () => {
  if (index > 0) {
    updateImage(index - 1);
  }
});

rightArrow.addEventListener("click", () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  }
});

$(".our-clients .owl-carousel").owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  margin: 280,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
