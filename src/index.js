import validator from "./validator.js";

const pageReload = document.querySelector("#logo");
pageReload.addEventListener("click", function () {
  location.reload();
});
initModal();
cardValidation();

function cardValidation() {
  const form = document.querySelector("#formValidation");
  const cardNumberValue = form.cardNumber.value;
  const cardNumber = cardNumberValue
    .replace(/[ ^0-9a-zA-Z]/g, "")
    .replace(/ /g, "");
  const button = document.querySelector("#validation");
  button.addEventListener("click", cardValidation(cardNumber));

  event.preventDefault();
  if (cardNumber.length == 0) {
    //console.log("Insira o número!");
  }
  if (cardNumber.length >= 11 && cardNumber.length <= 18) {
    validator.maskify(cardNumber);
    //let creditCardNumber = creditCardNumber.replace(/[ ^0-9]/g, "").replace(/ /g, "");
    validator.isValid(cardNumber);
    //console.log(mask, valid);
  } else {
    //console.log("Um cartão deve ter entre 11 a 18 números!");
  }
  form.reset();
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
