//import validator from "./validator.js";

const reloadPage = document
  .getElementById("logo")
  .addEventListener("click", function () {
    location.reload();
  });

initModalAbout();
initModalContacts();

/*


PARA TESTAR SELETOR: console.log(contato.elements.teste)


limpar entrada de número : tirar . e traço

validator.isValid()

validadtor.maskify

*/

function initModalAbout() {
  const openModal = document.querySelector('[data-modal="openModalAbout"]');
  const closeModal = document.querySelector('[data-modal="closeModalAbout"]');
  const containerModal = document.querySelector(
    '[data-modal="containerModalAbout"]'
  );

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

function initModalContacts() {
  const openModal = document.querySelector('[data-modal="openModalContacts"]');
  const closeModal = document.querySelector(
    '[data-modal="closeModalContacts"]'
  );
  const containerModal = document.querySelector(
    '[data-modal="containerModalContacts"]'
  );

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
