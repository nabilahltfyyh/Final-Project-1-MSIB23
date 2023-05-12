const inputKegiatan = document.querySelector(".input-kegiatan");
const tombolKegiatan = document.querySelector(".tombol-kegiatan");
const daftarKegiatan = document.querySelector(".daftar-kegiatan");
const opsiFilter = document.querySelector(".filter-kegiatan");

tombolKegiatan.addEventListener("click", tambahKegiatan);
daftarKegiatan.addEventListener("click", hapusKonfirmasi);
opsiFilter.addEventListener("click", filterKegiatan);
document.addEventListener("DOMContentLoaded", getKgtn);

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

// TODOS
function tambahKegiatan(event) {
  event.preventDefault();

  const kegiatanDiv = document.createElement("div");
  kegiatanDiv.classList.add("kegiatan");

  const kegiatanBaru = document.createElement("li");
  kegiatanBaru.innerText = inputKegiatan.value;
  kegiatanBaru.classList.add("isi-kegiatan");
  kegiatanDiv.appendChild(kegiatanBaru);

  const tombolSelesai = document.createElement("button");
  tombolSelesai.innerHTML = '<i class="fas fa-check"></i>';
  tombolSelesai.classList.add("complete-btn");
  kegiatanDiv.appendChild(tombolSelesai);

  const tombolHapus = document.createElement("button");
  tombolHapus.innerHTML = '<i class="fas fa-trash"></i>';
  tombolHapus.classList.add("trash-btn");
  kegiatanDiv.appendChild(tombolHapus);

  menyimpanKegiatan(inputKegiatan.value);

  daftarKegiatan.appendChild(kegiatanDiv);

  inputKegiatan.value = " ";
}

function hapusKonfirmasi(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const kegiatan = item.parentElement;

    kegiatan.classList.add("hapus");
    menghapusKegiatan(kegiatan);
    kegiatan.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const kegiatan = item.parentElement;
    kegiatan.classList.toggle("selesai");
  }
}

function filterKegiatan(e) {
  const kgtn = daftarKegiatan.childNodes;
  kgtn.forEach(function (kegiatan) {
    switch (e.target.value) {
      case "semua":
        kegiatan.style.display = "flex";
        break;

      case "selesai":
        if (kegiatan.classList.contains("selesai")) {
          kegiatan.style.display = "flex";
        } else {
          kegiatan.style.display = "none";
        }
        break;

      case "belum":
        if (!kegiatan.classList.contains("selesai")) {
          kegiatan.style.display = "flex";
        } else {
          kegiatan.style.display = "none";
        }
        break;
    }
  });
}

function menyimpanKegiatan(kegiatan) {
  let kgtn;
  if (localStorage.getItem("kgtn") === null) {
    kgtn = [];
  } else {
    kgtn = JSON.parse(localStorage.getItem("kgtn"));
  }

  kgtn.push(kegiatan);
  localStorage.setItem("kgtn", JSON.stringify(kgtn));
}

function getKgtn() {
  let kgtn;
  if (localStorage.getItem("kgtn") === null) {
    kgtn = [];
  } else {
    kgtn = JSON.parse(localStorage.getItem("kgtn"));
  }
  kgtn.forEach(function (kegiatan) {
    const kegiatanDiv = document.createElement("div");
    kegiatanDiv.classList.add("kegiatan");

    const kegiatanBaru = document.createElement("li");
    kegiatanBaru.innerText = kegiatan;
    kegiatanBaru.classList.add("isi-kegiatan");
    kegiatanDiv.appendChild(kegiatanBaru);

    const tombolSelesai = document.createElement("button");
    tombolSelesai.innerHTML = '<i class="fas fa-check"></i>';
    tombolSelesai.classList.add("complete-btn");
    kegiatanDiv.appendChild(tombolSelesai);

    const tombolHapus = document.createElement("button");
    tombolHapus.innerHTML = '<i class="fas fa-trash"></i>';
    tombolHapus.classList.add("trash-btn");
    kegiatanDiv.appendChild(tombolHapus);

    daftarKegiatan.appendChild(kegiatanDiv);
  });
}

function menghapusKegiatan(kegiatan) {
  let kgtn;
  if (localStorage.getItem("kgtn") === null) {
    kgtn = [];
  } else {
    kgtn = JSON.parse(localStorage.getItem("kgtn"));
  }
  const indexKegiatan = kegiatan.children[0].innerText;
  kgtn.splice(kgtn.indexOf(indexKegiatan), 1);
  localStorage.setItem("kgtn", JSON.stringify(kgtn));
}
