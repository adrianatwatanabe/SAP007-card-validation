import validator from "./validator.js";

const reloadPageLogo = document.getElementById("logo");
reloadPageLogo.addEventListener("click", function () {
  location.reload();
});
const openModal = openModal.addEventListener("click");
const closeModal = closeModal.addEventListener("click");
const containerModal = containerModal.addEventListener("click");
const button = document.querySelector("#validation");
button.addEventListener("click", cardValidation(cardNumber));
const form = document.querySelector("#formValidation");
const cardNumberValue = form.cardNumber.value;
const cardNumber = cardNumberValue
  .replace(/[ ^0-9a-zA-Z]/g, "")
  .replace(/ /g, "");

function cardValidation(cardNumber, event) {
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

initModalAbout();
initModalContacts();

function initModalAbout() {
  let openModal = document.querySelector('[data-modal="openModalAbout"]');
  let closeModal = document.querySelector('[data-modal="closeModalAbout"]');
  let containerModal = document.querySelector(
    '[data-modal="containerModalAbout"]'
  );
  analyzeModal(openModal, closeModal, containerModal);
}

function initModalContacts() {
  let openModal = document.querySelector('[data-modal="openModalContacts"]');
  let closeModal = document.querySelector('[data-modal="closeModalContacts"]');
  let containerModal = document.querySelector(
    '[data-modal="containerModalContacts"]'
  );
  analyzeModal(openModal, closeModal, containerModal);
}

function analyzeModal(openModal, closeModal, containerModal) {
  if (openModal && closeModal && containerModal) {
    openModal(toggleModal);
    closeModal(toggleModal);
    containerModal(clickOutsideModal);
  }
}

function toggleModal(event) {
  event.preventDefault();
  containerModal.classList.toggle("ativo");
}

function clickOutsideModal(event) {
  if (event.target === this) {
    toggleModal(event);
  }
}
