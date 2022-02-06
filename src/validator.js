const validator = {
  isValid(creditCardNumber) {
    if (creditCardNumber.length == 0) {
      console.log("Insira o número!");
      return false;
    }
    if (creditCardNumber.length <= 8) {
      console.log("Quantidade de números insuficiente!");
      return false;
    }

    var cleanNumber = creditCardNumber
      .replace(/[ ^0-9]/g, "")
      .replace(/ /g, "");
    var cardNumber = cleanNumber.split("");
    cardNumber.reverse();

    var sumAll = 0;
    for (let num = 0; num < cardNumber.length; num++) {
      var arrayNumber = [];
      if ((num + 1) % 2 == 0) {
        arrayNumber[num] = cardNumber[num] * 2;
        if (arrayNumber[num] - 9 >= 1) {
          let numberArray = evenNumber.split(""); //separou em array
          var aux = parseInt(numberArray[0]) + parseInt(numberArray[1]);
          sumAll = sumAll + aux;
        }
      } else {
        sumAll = sumAll + arrayNumber[num];
      }
    }
    // VALIDATION
    if (sumAll % 10 == 0) {
      console.log("Cartão de Crédito válido!");
      return true;
    } else {
      console.log("Cartão de Crédito inválido!");
      return false;
    }
  },

  maskify(creditCardNumber) {
    let cleanNumber = creditCardNumber.replace(/[^0-9]/g, "").replace(/ /g, "");
    let cardNumber = cleanNumber.split("");
    for (let num = 0; num < cardNumber.length; num++) {
      if (num < cardNumber.length - 4) {
        var cardMaskify = cardMaskify + "#";
      } else {
        var cardMaskify = cardMaskify + cardNumber.charAt(i);
      }
    }
    cardMaskify.join();
    return cardMaskify;
  },
};

export default validator;
