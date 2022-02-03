const validator = {
  //objeto
  //limpar entrada de número : tirar . e traço
  /*
    string com número de cartão a ser verificado
    retorna um boolean de acordo com algoritmo de Luhn
  
  }
  

    string com número de cartão
    retorna string com os 4 últimos caracteres visíveis #
    manter os 4 caracteres intactos, mesmo quando a string for mais curta


  //de 11 a 16 dígitos
  // ...


    Perguntar o número do cartão
    Passar os números em um array em ordem inverso
    Aplicar operações dos números das posições pares
      . números na posição par * 2
      . se o dobro >= 10, somar os dígitos -> 10 = 1 + 0 = 1
      . Somar os resultados + números da posição ímpares
    Comprovar se é válido
      . Resultado da soma / 10 = 0 -> válido
      

    Retornar a resposta, limpando o input e mostrando o número do cartão em baixo, mascarado.

    Array.prototype.join() : junta todos os elementos de um array em uma string e retorna esta string.

    Array.prototype.reverse() : inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
  */
};

export default validator;
