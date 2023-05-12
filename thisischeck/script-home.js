const images = [...document.querySelectorAll(".image")];

// popup
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

//*** */ LOAD NAVBAR/HEADER & FOOTER ***//
// Muat konten header.html
var xhr = new XMLHttpRequest();
xhr.open("GET", "header.html", true);
xhr.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return;
  document.querySelector("header").innerHTML = this.responseText;
};
xhr.send();

// Muat konten footer.html
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "footer.html", true);
xhr2.onreadystatechange = function () {
  if (this.readyState !== 4) return;
  if (this.status !== 200) return;
  document.querySelector("footer").innerHTML = this.responseText;
};
xhr2.send();
// END THIS LOAD

//*** THIS OWL CAROUSEL ***/ //
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
//*** END THIS OWL CAROUSEL ***/ //

//*** OUR WORK ***/ //
images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
  });
});

const updateImage = (i) => {
  let path = `../assets/img/img-home/work-img/image${i + 1}.jpg`;
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
//*** END OUR WORK ***/ //

//*** OUR CLIENTS - OWL CAROUSEL ***/ //
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
//*** END OUR CLIENTS - OWL CAROUSEL ***//
