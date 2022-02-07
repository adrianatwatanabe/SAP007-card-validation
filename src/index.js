import validator from "./validator.js";

var pageReload = document.querySelector("#logo");
pageReload.addEventListener("click", function () {
  location.reload();
});
initModal();
var buttonValidation = document.querySelector(".buttonValidation");
buttonValidation.addEventListener("click", cardValidation);

function cardValidation(e) {
  e.preventDefault();
  let inputCardNumber = document.querySelector("#cardNumber");
  let textError = document.querySelector(".errorMessage");
  let textValidation = document.querySelector("#cardText");
  let cardNumber = inputCardNumber.value;
  let creditCardNumber = cardNumber
    .replace(/[^0-9a-zA-Z]/g, "")
    .replace(/ /g, "");

  let valid = validator.isValid(creditCardNumber);
  let mask = validator.maskify(creditCardNumber);

  if (creditCardNumber.length == 0) {
    textError.textContent = "Insira os números!";
    newButton();
  } else if (creditCardNumber.length <= 8 || creditCardNumber.length >= 16) {
    textError.textContent = "O número do cartão deve ter entre 8 a 16 números!";
    newButton();
  } else if (valid == false) {
    textValidation.textContent = "Cartão de crédito inválido!";
    newButton();
  } else if (valid == true) {
    inputCardNumber.value = mask;
    textValidation.textContent = "Cartão de crédito válido!";
    newButton();
  }
}

function newButton() {
  let buttonValidation = document.querySelector(".buttonValidation");
  buttonValidation.classList.replace("buttonValidation", "buttonNew");
  buttonValidation.textContent = "INSERIR OUTRO NÚMERO";
  let buttonNew = document.querySelector(".buttonNew");
  buttonNew.addEventListener("click", cleanPage);
}

function cleanPage() {
  let inputCardNumber = document.querySelector("#cardNumber");
  let textError = document.querySelector(".errorMessage");
  let textValidation = document.querySelector("#cardText");
  let buttonValidation = document.querySelector(".buttonNew");
  textError.innerHTML = "";
  textValidation.innerHTML = "";
  inputCardNumber.value = "";
  buttonValidation.classList.replace("buttonNew", "buttonValidation");
  buttonValidation.textContent = "VALIDAR";
  location.reload();
}

function initModal() {
  const openModalA = document.querySelector('[data-modal="openModalAbout"]');
  const closeModalA = document.querySelector('[data-modal="closeModalAbout"]');
  const containerModalA = document.querySelector(
    '[data-modal="containerModalAbout"]'
  );
  const openModalC = document.querySelector('[data-modal="openModalContacts"]');
  const closeModalC = document.querySelector(
    '[data-modal="closeModalContacts"]'
  );
  const containerModalC = document.querySelector(
    '[data-modal="containerModalContacts"]'
  );
  analyzeModal(openModalA, closeModalA, containerModalA);
  analyzeModal(openModalC, closeModalC, containerModalC);
}

function analyzeModal(openModal, closeModal, containerModal) {
  if (openModal && closeModal && containerModal) {
    let toogle = function (event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    };
    let outside = function (event) {
      if (event.target === this) {
        event.preventDefault();
        containerModal.classList.toggle("ativo");
      }
    };
    openModal.addEventListener("click", toogle);
    closeModal.addEventListener("click", toogle);
    containerModal.addEventListener("click", outside);
  }
}
