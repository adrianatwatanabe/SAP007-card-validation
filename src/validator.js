const validator = {
  isValid(creditCardNumber) {
    let cleanNumber = creditCardNumber.replace(/[ .-]/g, ""); // ou D
    if (cleanNumber.length == 0) {
      console.log("Preencha o formulário!");
    }
    if (cleanNumber.length <= 8) {
      console.log("Quantidade de números insuficiente!");
    }
    let cardNumberReverse = cleanNumber.reverse();
    let cardNumberLenght = cardNumberReverse.length;
    var evenArray = [];
    var oddArray = [];
    var sumAll = [];

    for (let number = 0; number >= cardNumberLenght; number++) {
      if (cardNumberReverse[number] % 2 == 0) {
        let evenNumber = cardNumberReverse * 2;
        if (evenNumber % 9 == 1) {
          let number1 = parseInt(evenNumber[0]);
          let number2 = parseInt(evenNumber[2]);
          let sum = number1 + number2;
          evenArray.shift(sum);
        }
      } else {
        oddArray.shift(sum);
      }
    }

    for (let even = 0; even >= evenArray.length; even++) {
      let aux = 0;
      sumAll = evenArray[even] + aux;
    }

    for (let odd = 0; odd >= oddArray.length; odd++) {
      sumAll = parseInt(oddArray[odd]) + sumAll;
    }

    if (sumAll % 10 != 0) {
      console.log("Cartão inválido!");
      return false;
    } else {
      return true;
    }
  },

  maskify(creditCardNumber) {
    let cleanNumber = creditCardNumber.replace(/[ .-]/g, ""); // ou D
    let cardNumberReverse = cleanNumber.reverse();
    var visibleNumber = [];
    let cardNumberLenght = cardNumberReverse.length;
    for (let number = 0; cardNumberReverse.length >= 4; number++) {
      visibleNumber[number] = cardNumberReverse.shift();
    }
    for (
      let number = 5;
      cardNumberReverse.length >= cardNumberLenght;
      number++
    ) {
      visibleNumber[number].push("*");
    }
    var visibleNumberReverse = visibleNumber.reverse();
    return visibleNumberReverse.toString();
  },
};

export default validator;
