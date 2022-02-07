import validator from "./validator.js";

const pageReload = document.querySelector("#logo");
pageReload.addEventListener("click", function () {
  location.reload();
});
initModal();

const form = document.querySelector("#formValidation");
const inputCardNumber = document.querySelector("#cardNumber");
const buttonValidation = document.querySelector("#validation");
buttonValidation.addEventListener("click", cardValidation);

function cardValidation(e) {
  e.preventDefault();
  let cardNumber = inputCardNumber.value;
  const creditCardNumber = cardNumber
    .replace(/[^0-9a-zA-Z]/g, "")
    .replace(/ /g, "");

  const valid = validator.isValid(creditCardNumber);
  const mask = validator.maskify(creditCardNumber);

  if (creditCardNumber.length == 0) {
    return (document.querySelector(".errorMenssage").innerHTML =
      "Insira os números!");
  } else if (creditCardNumber.length <= 7 || creditCardNumber.length >= 18) {
    return (document.querySelector(".errorMenssage").textContent =
      "O número do cartão deve ter entre 11 a 16 números!");
  } else if (valid == false) {
    return (document.querySelector("#cardValidation").textContent =
      "Cartão de crédito inválido");
  } else if (valid == true) {
    inputCardNumber.textContent = mask;
    document.querySelector("#cardValidation").textContent =
      "Cartão de crédito válido";
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
