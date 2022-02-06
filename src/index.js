import validator from "./validator.js";

// RELOAD PAGE IN LOGO
document.getElementById("logo").addEventListener("click", function () {
  location.reload();
});

// INIT MODAL
initModalAbout();
initModalContacts();

// VALIDATION
var addButton = document.querySelector("#validation");

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  // GETTING ANSWER
  let form = document.querySelector("#formValidation");
  var creditCardNumber = form.cardNumber.value; //String
  var valid = validator.isValid(creditCardNumber);
  if (valid != true) {
    console.log("Cartão inválido!");
  } else {
    var maskify = validator.maskify(creditCardNumber);
    console.log(maskify);
    console.log(typeof maskify);
  }
  form.reset();
});

// MODAL
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
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function clickOutsideModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    openModal.addEventListener("click", toggleModal);
    closeModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutsideModal);
  }
}
