// Модалки и кнопки
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("myModal");

const openBtnQ = document.getElementById("openModalQ");
const closeBtnQ = document.getElementById("closeModalQ");
const modalQ = document.getElementById("myModalQ");

const mapLink = document.getElementById("openMapModal");
const mapModal = document.getElementById("mapModal");
const closeMapModal = document.getElementById("closeMapModal");



// Открытие/закрытие модалок
openBtn.onclick = () => modal.classList.add("is-open");
closeBtn.onclick = () => modal.classList.remove("is-open");

openBtnQ.onclick = () => modalQ.classList.add("is-open");
closeBtnQ.onclick = () => modalQ.classList.remove("is-open");

mapLink.addEventListener("click", e => {
  e.preventDefault();
  mapModal.classList.add("is-open");
});
closeMapModal.addEventListener("click", () => mapModal.classList.remove("is-open"));

// Закрытие по клику вне модалок
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("is-open");
  if (e.target === modalQ) modalQ.classList.remove("is-open");
  if (e.target === mapModal) mapModal.classList.remove("is-open");
});



function showAlert(message, type = "info", duration = 2000) {
  const alertBox = document.getElementById('customAlert');
  alertBox.textContent = message;
  alertBox.className = 'show'; // сброс классов

  if (type === "success") alertBox.style.backgroundColor = "rgb(50, 160, 149)";
  else if (type === "error") alertBox.style.backgroundColor = "rgb(215, 75, 77)";
  else alertBox.style.backgroundColor = "#222";

  setTimeout(() => {
    alertBox.classList.remove('show');
  }, duration);
}





// Обработка формы записи на прием
document.getElementById("gform").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const formData = new FormData(form);
  const selectedMessengers = Array.from(form.querySelectorAll('input[name="soc-checkbox"]:checked'))
    .map(cb => cb.value)
    .join(", ");
  formData.set("messengers", selectedMessengers);

  let rawPhone = formData.get("phone");
  let cleanedPhone = rawPhone.replace(/\D/g, "");
  if (!/^380\d{9}$/.test(cleanedPhone)) {
    showAlert("Будь ласка, введіть номер у форматі 380XXXXXXXXX.", "error");
    return;
  }
  formData.set("phone", cleanedPhone);

  fetch("https://script.google.com/macros/s/AKfycbxl-Wqn0IbEH3vE09Fsk32t6T4kb46zQCkjynsPMxEtSHqUuIjje3mUuCTOT3oNyHHbeg/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(() => {
    showAlert("Повідомлення надіслано!", "success");
    form.reset();
    modal.classList.remove("is-open");
  })
  .catch(err => {
    showAlert("Помилка при надсиланні.", "error");
    console.error(err);
  });
});

// Обработка формы "задати запитання"
document.getElementById("gformQ").addEventListener("submit", function (e) {
  e.preventDefault();
  const formQ = e.target;

  const formDataQ = new FormData(formQ);
  const selectedMessengers = Array.from(formQ.querySelectorAll('input[name="soc-checkbox"]:checked'))
    .map(cb => cb.value)
    .join(", ");
  formDataQ.set("messengers", selectedMessengers);

  let rawPhoneQ = formDataQ.get("phone");
  let cleanedPhoneQ = rawPhoneQ.replace(/\D/g, "");
  if (!/^380\d{9}$/.test(cleanedPhoneQ)) {
    showAlert("Будь ласка, введіть номер у форматі 380XXXXXXXXX.", "error");
    return;
  }
  formDataQ.set("phone", cleanedPhoneQ);

  fetch("https://script.google.com/macros/s/AKfycbxl-Wqn0IbEH3vE09Fsk32t6T4kb46zQCkjynsPMxEtSHqUuIjje3mUuCTOT3oNyHHbeg/exec", {
    method: "POST",
    body: formDataQ
  })
  .then(res => res.text())
  .then(() => {
    showAlert("Повідомлення надіслано!", "success");
    formQ.reset();
    modalQ.classList.remove("is-open");
  })
  .catch(err => {
    showAlert("Помилка при надсиланні.", "error");
    console.error(err);
  });
});

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
