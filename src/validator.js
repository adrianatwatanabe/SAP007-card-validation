const validator = {
  isValid(creditCardNumber) {
    var errors = [];
    if (creditCardNumber.length == 0) {
      errors.textContent = "Insira o número!";
      return false;
    }
    if (creditCardNumber.length <= 8) {
      errors.textContent = "Quantidade de números insuficiente!";
      return false;
    }

    let cleanNumber = creditCardNumber.replace(/[^0-9]/g, "");
    let cardNumber = cleanNumber.split("");
    cardNumber.reverse();
    let cardNumberLenght = cardNumber.length;

    // DOUBLING THE EVEN NUMBERS
    var evenArray = [];
    var oddArray = [];
    for (let number = 0; number >= cardNumberLenght; number++) {
      //ERRADO
      if (cardNumber[number] % 2 == 0) {
        let evenNumber = cardNumber * 2;
        if (evenNumber % 9 == 1) {
          let number1 = parseInt(evenNumber[0]);
          let number2 = parseInt(evenNumber[2]);
          let sum = number1 + number2;
          evenArray.shift(sum);
        }
        console.log("par");
      } else {
        oddArray.shift(sum);
        console.log("");
      }
    }

    // ADDING EVERYTHING
    var sumAll = 0;
    for (let even = 0; even >= evenArray.length; even++) {
      sumAll = evenArray[even] + sumAll;
    }
    for (let odd = 0; odd >= oddArray.length; odd++) {
      let convertNumber = parseInt(oddArray[odd]);
      sumAll = convertNumber + sumAll;
    }

    // VALIDATION
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
