const validator = {
  isValid: function (creditCardNumber) {
    let cardList = Array.from(creditCardNumber);
    let cardNumber = cardList.reverse();
    let cardNumberArray = cardNumber.map(Number);
    let sumAll = 0;
    for (let num = 0; num < cardNumberArray.length; num++) {
      if (num % 2 != 0) {
        cardNumberArray[num] = cardNumberArray[num] * 2;
        if (cardNumberArray[num] > 9) {
          cardNumberArray[num] = cardNumberArray[num] - 9;
          sumAll = sumAll + cardNumberArray[num];
        } else {
          sumAll = sumAll + cardNumberArray[num];
        }
      } else {
        sumAll = sumAll + cardNumberArray[num];
      }
      if (sumAll % 10 === 0) {
        return (creditCardNumber = true);
      } else {
        return (creditCardNumber = false);
      }
    }
  },

  maskify: function (creditCardNumber) {
    let mask = "";
    let cardNumber = Array.from(creditCardNumber);
    for (let num = 0; num < cardNumber.length; num++) {
      if (num >= cardNumber.length - 4) {
        mask = mask + cardNumber.charAt(num);
      } else {
        mask = mask + "#";
      }
    }
    return mask;
  },
};

export default validator;
