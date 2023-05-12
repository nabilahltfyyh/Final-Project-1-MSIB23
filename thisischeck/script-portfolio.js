const buttons = document.querySelectorAll(".btn");

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

//
//
//
//
// PORTFOLIO
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
      }
    });
    button.classList.add("active");
  });
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
