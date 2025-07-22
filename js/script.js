// Модалка записи на прийом
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

openBtn.onclick = () => {
  modal.classList.add("is-open");
};

closeBtn.onclick = () => {
  modal.classList.remove("is-open");
};

// Закриття при кліку поза вікном для форми
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("is-open");
  }
};

// Обробка форми
document.getElementById("gform").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;

  fetch("https://script.google.com/macros/s/AKfycbykoooe77JUO60OIDRmPwPSL_VSktsPTsy6ZJi4CQNsFEqohxvGgvSg85wKdJUORT1X/exec", {
    method: "POST",
    body: new FormData(form)
  })
  .then(res => res.text())
  .then(data => {
    alert("Повідомлення надіслано!");
    form.reset();
    modal.classList.remove("is-open"); // Закриваємо модалку після успішної відправки
  })
  .catch(err => {
    alert("Помилка при надсиланні.");
    console.error(err);
  });
});

// Google Sheets функції (скрипт на сервері)
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  sheet.appendRow([
    e.parameter["user-name"],
    e.parameter["phone"],
    e.parameter["email"],
    e.parameter["doctor"],
    e.parameter["user-comment"],
    e.parameter["user-privacy"],
    new Date()
  ]);
  
  return ContentService.createTextOutput("OK");
}

function setTextFormat() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange("B2:B10000");
  range.setNumberFormat("@");  
}

// Бургер-меню
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger-button");
    const navWrapper = document.querySelector(".header-nav-wrapper");

    if (burger && navWrapper) {
        burger.addEventListener("click", () => {
            navWrapper.classList.toggle("open");
        });
    }
});

// Модалка з картою
const mapLink = document.getElementById("openMapModal");
const mapModal = document.getElementById("mapModal");
const closeMapModal = document.getElementById("closeMapModal");

mapLink.addEventListener("click", function (e) {
  e.preventDefault(); // Блокує прокрутку до #map
  mapModal.classList.add("is-open");
});

closeMapModal.addEventListener("click", function () {
  mapModal.classList.remove("is-open");
});

window.addEventListener("click", function (e) {
  if (e.target === mapModal) {
    mapModal.classList.remove("is-open");
  }
});



// Модалка записи на прийом
const openBtnQ = document.getElementById("openModalQ");
const closeBtnQ = document.getElementById("closeModalQ");
const modalQ = document.getElementById("myModalQ");

openBtnQ.onclick = () => {
  modalQ.classList.add("is-open");
};

closeBtnQ.onclick = () => {
  modalQ.classList.remove("is-open");
};

// Закриття при кліку поза вікном для форми
window.onclick = (e) => {
  if (e.target === modalQ) {
    modalQ.classList.remove("is-open");
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".zoomable");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      img.classList.add("zoomed");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("zoomed");
    });
  });
});