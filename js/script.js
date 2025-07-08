const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("myModal");

  openBtn.onclick = () => {
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  // Закриття при кліку поза вікном
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
};
  

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
    })
    .catch(err => {
      alert("Помилка при надсиланні.");
      console.error(err);
    });
});


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
  
const burger = document.querySelector('.burger-button');
  const navWrapper = document.querySelector('.header-nav-wrapper');

  burger.addEventListener('click', () => {
    navWrapper.classList.toggle('open');
  });