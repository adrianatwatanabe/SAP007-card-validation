<div align="center">
   <img alt="logo-CardVeric" src="/src/img/logo-pequeno.png">

## CardVeric verifica se o cartão de crédito e débito são válidos.
  
**Status do Projeto:** *Em andamento*
  
<div style="display: inline_block">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"> <img alt="HTML" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSSL" target="_blank"><img alt="CSS" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><img alt="JavaScript" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></a>
</div>
</div>

---

## Índice

- [1. Introdução](#1-introdução)
- [2. Funcionalidades](#2-funcionalidades)
- [3. Usuários](#3-usuários)
- [4. Planejamento do Projeto](#4-planejamento-do-projeto)
   - [4.1 Scrum](#41-scrum)
   - [4.2 Kanban](#42-kanban)
- [5. Experiência do Usuário (UX) e Design de Interface (UI)](#5-experiência-do-usuário-ux-e-design-de-interface-ui)
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

Com a ajuda do CardVeric, os principais usuários dessa aplicação são os comerciantes em geral, mas principalmente os que suspeitam de fraude, identificando as informações de pagamento fraudulento mais rapidamente e evitando as perdas de tempo e dinheiro associados, por meio da identificação dos números de cartões de crédito e débito falsos antes de solicitar uma autorização da empresa do cartão. 

## 4. Planejamento do Projeto
  
  - `CardVeric` é um projeto desenvolvido em 2022, para o bootcamp da [Laboratoria Brasil](https://hub.laboratoria.la/br).
  - Esse projeto é baseado nas instruções apresentadas pelo `README` do [CardValidation](https://github.com/Laboratoria/SAP007-card-validation.git).

  ### 4.1 Scrum

  1. Para realizar o planejamento foi utilizado o `Scrum`, que é uma [metodologia ágil](https://agilemanifesto.org/principles.html) para gestão e planejamento de projetos de software, onde os projetos são divididos em ciclos, chamados de Sprints.
  2. O `Sprint` representa um conjunto de atividades que devem ser executadas. As funcionalidades a serem implementadas em um projeto são mantidas em uma lista que é conhecida como `Product Backlog`. 
  3. A cada dia de uma Sprint, há uma breve reunião chamada `Daily Scrum Meeting`. O objetivo é disseminar conhecimento sobre o que foi feito no dia anterior, identificar impedimentos e priorizar o trabalho do dia que se inicia, priorizando os itens do Product Backlog.
  4. Ao final de um Sprint, é apresentado as funcionalidades implementadas em uma `Sprint Review`. Finalmente, faz-se uma `Sprint Retrospective` e parte para o planejamento do próximo Sprint. Assim reinicia-se o ciclo.
  
  - Os Sprints da Laboratoria possuem duração de uma semana e são iniciadas todas as sextas-feiras. A Daily é realizada por meio de uma planilha e o Sprint Review é feito todas as quintas-feiras. 

  ### 4.2 Kanban

  - Para facilitar a organização sobre: _**O QUE FAZER, O QUE ESTOU FAZENDO e O QUE FOI FEITO**_, foi utilizado a metodologia `KANBAN`.
  - O objetivo é supervisionar, gerenciar e controlar o fluxo de tarefas que são feitas em cada etapa da produção. 
  - Ele é dividido em 3 principais colunas: _**To Do, Doing e Done**_, e, os cartões são movidos de coluna para coluna conforme o seu status é mudado. 
  - A ferramenta utilizada para a organização foi o [Trello](https://trello.com/pt-BR) e ela foi dividida em cinco colunas: _**Files, To Do Backlog, To Do, Ongoing e Done.**_
     - `Files`: são os arquivos que devem ser entregados ao final do projeto. Servindo mais como um lembrete com checklist especificados no `README` do [CardValidation](https://github.com/Laboratoria/SAP007-card-validation.git). Eles possuem a etiqueta azul com nome de Files.
     - `To Do Backlog`: são os microprojetos a serem feitos por etapas e sequências, ordenado em ordem crescente. Ao final do Scrum, o projeto estará funcionando, mesmo não estando completo com todos os requisitos apresentados no README do CardValidation. Eles possuem a etiqueta rosa com o nome Backlog, mas também poderão ter outras etiquetas com nível de prioridade para fazer o Ongoing. 
     - `To Do`: como o projeto é de um bootcamp, nesta coluna estão todos os tópicos a serem estudados, de acordo com o que é necessário para o Backlog. Eles são separados por nível de prioridade de 1 a 6, onde cada cor recebe uma cor.
     - `Ongoing`: os cartões do To Do Backlog e To Do são movidos para ele, obedecendo o nível de prioridade conforme o que é necessário estudar para realizar os baby steps (microprojetos). 
     - `Done`: nada mais é que os cartões concluídos no Ongoing.

     - ### [KANBAN DO CARDVERIC](https://trello.com/b/e9L8eGe5/lab-primeiro-proj)

## 5. Experiência do Usuário (UX) e Design de Interface (UI)

mostrar as reSpostas na própria página, não precisando fechar pop-pup
cores que possuem contraste - adobe color
Telas
Explicações e mensagens
Wireframe (p&b)
Protótipo e Feedback --> Validação do protótipo


  
Cores
formas
Tipografia
Ícones 
  ### Criação do Protótipo
  
   - Para realizar o projeto  do bootcamp Laboratoria, foi realizado primeiro um protótipo simples (baixa fidelidade) usando papel e lápis.
   - Em seguida foi mostrado a solução para uma das alunas desse bootcamp, para que ela o avaliasse, dando feedbacks sobre ele que foram anotados no próprio papel do feedback.
   - Depois de todas as ideias e dicas estabelecidas, para validar esse protótipo, foi desenvolvido um novo protótipo (alta fidelidade) usando uma ferramenta digital para protótipo. A ferramenta utilizada foi o Figma, que é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.

   ### Protótipo de Baixa Fidelidade com Feedback
   
   <div>
      <img alt="" height="300" src="/src/img/prototipo-card-validation.jpeg">
   </div>
   
   ### Protótipo de Alta Fidelidade
   
   <div>
      <img alt="" height="300" src="/src/img/prototipo.gif">
   </div>
   
## 6. Instruções de Uso:

   ### 6.1 Instalações:

   1. Após fazer o seu próprio _[FORK](https://docs.github.com/en/get-started/quickstart/fork-a-repo)_ do repositório CardVeric, _[CLONE](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)_ o fork para o seu computador (cópia local).
   2. Instale o software [Node.js](https://nodejs.org/en/).
   3. Após a instalação, abra o [terminal](https://www.programaria.org/o-que-e-o-terminal-ou-venha-conhecer-tela-preta/) de seu computador e digite os seguintes comandos para verificar as versões do Node.js e [npm](https://docs.npmjs.com/) instaladas. Digite uma linha por vez:

      ```
      $ node -v
      $ npm -v 
      ```
 
   3. Localize o diretório do projeto CardVeric em seu computador por meio do temminal, utilizando o comando cd (Change Directory).
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
   6. O comando `npm star` exibirá uma _**url**_ com a palavra _**localhost**_. Copie essa url, cole-a na [barra de endereço](https://pt.wikipedia.org/wiki/Barra_de_endere%C3%A7o) do seu navegador e aperte a tecla [Enter](https://pt.wikipedia.org/wiki/Enter_(tecla)).
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
