<div align="center">
   <img alt="logo-CardVeric" src="/src/img/logo-pequeno.png">

## CardVeric verifica se o cartão de crédito e débito são válidos.
  
**Status do Projeto:** *Em andamento*
  
<div style="display: inline_block">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"> <img alt="Adri-HTML" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSSL" target="_blank"><img alt="Adri-CSS" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><img alt="Adri-Js" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></a>
</div>
</div>

---

## Índice

- [1. Introdução](#1-introdução)
- [2. Funcionalidades](#2-funcionalidades)
- [3. Usuários](#3-usuários)
- [4. Design de Interface (UI)](#4-design-de-interface-ui)
- [5. Experiência do Usuário (UX)](#5-experiência-do-usuário-ux)
- [6. Instruções de Uso](#6-instruções-de-uso)
  - [6.1. Instalações](#61-instalações)
  - [6.2. Como usar o CardVeric?](#62-como-usar-o-cardveric)
- [7. Ferramentas Utilizadas](#7-ferramentas-utilizadas)
- [8. Autora](#8-autora)

---

## 1. Introdução

A aplicação CardVeric é uma aplicação que verifica se os cartões de crédito e débito são válidos, após inserir no campo de entrada o seu número e constatar se o mesmo possui resultado válido ou não, além de impedir que seja enviado o campo vazio. Ele também deve ocultar visualmente todos os dígitos do número do cartão, exceto os últimos 4 caracteres e identificar o emissor do cartão.

## 2. Funcionalidades

A validação de um cartão de crédito refere-se ao processo de execução do [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) que executa cálculos utilizando o número do cartão. Quando o algoritmo mostra que o cartão é válido, significa que apenas o número do cartão está entre aqueles que poderiam existir em uma determinada empresa de cartões de crédito.
    
Essa validação do cartão de crédito é o primeiro passo para aceitar um pagamento com cartão. Após uma validação bem sucedida, o comerciante irá introduzir o número do cartão em um programa de software comercial ou uma máquina de cartão de crédito, que envia o número da conta para o emissor do cartão para autorização. Este é o ponto do processo em que um cartão pode ser rejeitado por crédito remanescente insuficiente. Empresas de cartão de crédito também vão recusar cartões expirados ou cartões vinculados a contas fechadas. A autorização com sucesso permite que o comerciante coloque um valor, que completa a transação inicial. 

## 3. Usuários

Com o aumento crescente das vendas online causado devido a pandemia de Covid-19, as vendas on-line ganharam [13 milhões de novos consumidores no Brasil em 2020](https://g1.globo.com/economia/tecnologia/noticia/2021/03/29/faturamento-de-lojas-on-line-cresce-41percent-em-2020-maior-alta-em-13-anos.ghtml), segundo levantamento da Ebit/Nielsen. Além de 83% dos novos compradores afirmarem que repetiriam a compra pela internet. E com a ajuda das redes sociais, como Instagram, Facebook, WhatshApp e TikTok, isso facilitou  registrando um aumento de [185% entre 2019 e 2020 nos negócios](https://mercadoeconsumo.com.br/2021/02/23/vendas-no-e-commerce-pelas-redes-sociais-saltam-de-22-para-34-em-2020/), representando um terço dessas vendas, de acordo com a Nuvemshop. Então boa parte das empresas precisou se digitalizar, provocando um salto expressivo no mercado digital.

Com a ajuda do CardVeric, os principais usuários dessa aplicação são os comerciantes em gerais, mas principalmente os que suspeitam de fraude, identificando as informações de pagamento fraudulento mais rapidamente e evitando as perdas de tempo e dinheiro associados, por meio da identificação dos números de cartões de crédito e débito falsos antes de solicitar uma autorização da empresa do cartão. 

## 4. Design de Interface (UI)

Cores
formas
Tipografia
Ícones



## 5. Experiência do Usuário (UX)

Planejamento do Projeto e Processo, baby steps: https://trello.com/b/e9L8eGe5/lab-primeiro-proj

mostrar as repostas na própria página, não precisando fechar pop-pup
cores que possuem contraste - adobe color
Telas
Explicações e mensagens
Wireframe (p&b)
Protótipo e Feedback --> Validação do protótipo
   - Para realizar o projeto CardValidation do bootcamp [Laboratoria](https://hub.laboratoria.la/br), foi realizado primeiro um protótipo simples usando papel e lápis, em preto e branco.
   - valide esta solução com uma companheira (peça feedback).
   - Use o aprendizado no momento de validar seu primeiro protótipo e desenvolva um novo protótipo empregando alguma ferramenta para design de protótipos 



## 6. Instruções de Uso:

   ### 6.1 Instalações:

   1. Após fazer o seu próprio _[FORK](https://docs.github.com/en/get-started/quickstart/fork-a-repo)_ do repositório CardVeric, _[CLONE](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)_ o fork para o seu computador (cópia local).
   2. Instale o software [Node.js](https://nodejs.org/en/).
   3. Após a instalação, abra o [terminal](https://www.programaria.org/o-que-e-o-terminal-ou-venha-conhecer-tela-preta/) de seu computador e digite os seguintes comandos para verificar as versões do Node.js e [npm](https://docs.npmjs.com/) instaladas. Digite uma linha por vez:

      ```
      $ node -v
      $ npm -v 
      ```
 
   3. Localize o diretório do projeto CardVeric em seu computador por meio do temrinal, utilizando o comando cd (Change Directory).
   4. Instale as dependências do projeto executando o seguinte comando:

      ```
      $ npm install
      ```
   5. Se tudo foi bem, você deve conseguir executar os comandos dos testes unitários pelo terminal com o comando:
    
      ```
      $ npm test
      ```
      
   7. Após os testes ocorrerem tudo bem, inicie o npm no terminal para ver a interface do seu programa no navegador:
   
      ```
      $ npm start
      ```
   6. O comando `npm star` exibirá uma _**url**_ com a palavra _**localhost**_. Copie essa url, cole-a na [barra de endereço](https://pt.wikipedia.org/wiki/Barra_de_endere%C3%A7o) de seu navegador e aperte a tecla [Enter](https://pt.wikipedia.org/wiki/Enter_(tecla)).
   7. Pronto! Agora o site CardVeric aparecerá em seu navegador.

---
   
   ### 6.2 Como usar o CardVeric?

   1. Ao carregar a página da aplicação `CardVeric` , insira os `números de 0 a 9` , do cartão de `débito ou crédito` no campo de entrada.
   2. Após digitar o número, clique no botão `Validar` e espere um alguns milésimos de segundos.
   3. Pronto! A resposta se o cartão é válido ou não, surgirá abaixo do botão Validar.
   4. Para inserir outro número de cartão de débito ou crédito, clique no campo de entrada e digite os números.
   5. Logo em seguida, clique em Validar e a resposta aparecerá abaixo do botão.
   6. Para voltar a página sem os números do cartão, clique no logo do [CardVeric](/src/img/logo-pequeno.png).
   
     - Para mais informações sobre o produto, clique em _**Sobre**_.
     - Em caso de problemas com a aplicação ou deseje tirar dúvidas sobre ela, clique em _**Contatos**_.  

## 7. Ferramentas Utilizadas:

- **Planejamento:**
   - **Scrum:** _[Trello](https://trello.com)_ 

- **UX/UI**:
   - **Edição de Imagens:** _[Canvas](https://www.canva.com/pt_br/)_
   - **Paleta de Cores com Acessibilidade:** _[Adobe Color](https://color.adobe.com/pt/create/color-wheel)_
   - **Protótipo:**  _[Figma](https://www.figma.com/)_

- **Web:**
   - **Editor:** _[Visual Studio Code](https://code.visualstudio.com/)_

## 8. Autora

<div>
   <img alt="Adriana-Watanabe" height="150" src="https://user-images.githubusercontent.com/97361694/150664694-707f976b-f640-47a2-96c7-86b14db235b5.png">
</div>

### [Adriana Tiemi Watanabe](https://github.com/adrianatwatanabe)

**Projeto do Bootcamp da _[Laboratoria](https://hub.laboratoria.la/br)_**

<a href = "mailto:adriana.t.watanabe@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
<a href="https://www.linkedin.com/in/adrianatwatanabe" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a> 
