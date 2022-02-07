const validator = {
  isValid: function (creditCardNumber) {
    let cardList = Array.from(creditCardNumber);
    let cardNumberReverse = cardList.reverse();
    let cardNumber = cardNumberReverse.map(Number);
    let sumAll = 0;

    for (let num = 0; num < cardNumber.length; num++) {
      if ((num + 1) % 2 !== 0) {
        sumAll = sumAll + cardNumber[num];
      } else {
        cardNumber[num] = cardNumber[num] * 2;
        if (cardNumber[num] > 9) {
          cardNumber[num] = cardNumber[num] - 9;
          sumAll = sumAll + cardNumber[num];
        } else {
          sumAll = sumAll + cardNumber[num];
        }
      }
    }
    return sumAll % 10 === 0;
  },

  maskify: function (creditCardNumber) {
    var mask = [];
    for (let num = 0; num < creditCardNumber.length; num++) {
      if (num < creditCardNumber.length - 4) {
        mask.push("#");
      } else {
        mask.push(creditCardNumber[num]);
      }
    }
    return mask.join("");
  },
};

export default validator;
