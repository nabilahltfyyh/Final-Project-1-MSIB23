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
