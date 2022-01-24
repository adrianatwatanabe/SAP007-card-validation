<div align="center">
   <img alt="logo-CardVeric" src="/src/img/small-logo.png">

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

- [CardVeric verifica se o cartão de crédito e débito são válidos.](#cardveric-verifica-se-o-cartão-de-crédito-e-débito-são-válidos)
- [Índice](#índice)
- [1. Introdução](#1-introdução)
- [2. Funcionalidades](#2-funcionalidades)
- [3. Experiência do Usuário (UX)](#3-experiência-do-usuário-ux)
  - [3.1 Personas ou Usuários](#31-personas-ou-usuários)
  - [3.2 Wireframe](#32-wireframe)
  - [3.3 Protótipo Simples com Feedbacks](#33-protótipo-simples-com-feedbacks)
- [4. Design de Interface (UI)](#4-design-de-interface-ui)
  - [4.1 Marca CardVeric](#41-marca-cardveric)
  - [4.2 Design Aplicado](#42-design-aplicado)
  - [4.3 Protótipo Validado](#43-protótipo-validado)
- [5. Planejamento do Projeto](#5-planejamento-do-projeto)
  - [5.1 Scrum](#51-scrum)
  - [5.2 Kanban](#52-kanban)
- [6. Instruções de Uso:](#6-instruções-de-uso)
  - [6.1 Instalações:](#61-instalações)
  - [6.2 Como usar o CardVeric?](#62-como-usar-o-cardveric)
- [7. Ferramentas Utilizadas:](#7-ferramentas-utilizadas)
- [8. Autora](#8-autora)
  - [Adriana Tiemi Watanabe](#adriana-tiemi-watanabe)

---

## 1. Introdução

A aplicação CardVeric é uma aplicação que verifica se os cartões de crédito e débito são válidos, após inserir no campo de entrada o seu número e constatar se o mesmo possui resultado válido ou não, além de impedir que seja enviado o campo vazio. Ele também deve ocultar visualmente todos os dígitos do número do cartão, exceto os últimos 4 caracteres e identificar o emissor do cartão.

## 2. Funcionalidades

A validação de um cartão de crédito refere-se ao processo de execução do [algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) que executa cálculos utilizando o número do cartão. Quando o algoritmo mostra que o cartão é válido, significa que apenas o número do cartão está entre aqueles que poderiam existir em uma determinada empresa de cartões de crédito.
    
Essa validação do cartão de crédito é o primeiro passo para aceitar um pagamento com cartão. Após uma validação bem sucedida, o comerciante irá introduzir o número do cartão em um programa de software comercial ou uma máquina de cartão de crédito, que envia o número da conta para o emissor do cartão para realizar a autorização e confirmar o pagamento.

## 3. Experiência do Usuário (UX)

### 3.1 Personas ou Usuários

   - As personas do CardVeric são os comerciantes em geral, mas principalmente os que suspeitam de fraude,  por necessitarem de ajuda para validar os cartões de crédito e débito de seus clientes, identificando as informações de pagamento fraudulento mais rapidamente e evitando as perdas de tempo e dinheiro associados, por meio da identificação dos números de cartões de crédito e débito falsos antes de solicitar uma autorização da empresa do cartão, para o pagamento dos produtos e serviços prestados por eles.
   - Provavelmente a procura por verificação de cartão de crédito e débito tem aumentado, pois com o aumento crescente das vendas online causado devido a pandemia de Covid-19, as vendas on-line ganharam [13 milhões de novos consumidores no Brasil em 2020](https://g1.globo.com/economia/tecnologia/noticia/2021/03/29/faturamento-de-lojas-on-line-cresce-41percent-em-2020-maior-alta-em-13-anos.ghtml), segundo levantamento da Ebit/Nielsen. Além de 83% dos novos compradores afirmarem que repetiriam a compra pela internet. E com a ajuda das redes sociais, como Instagram, Facebook, WhatshApp e TikTok, isso facilitou  registrando um aumento de [185% entre 2019 e 2020 nos negócios](https://mercadoeconsumo.com.br/2021/02/23/vendas-no-e-commerce-pelas-redes-sociais-saltam-de-22-para-34-em-2020/), representando um terço dessas vendas, de acordo com a Nuvemshop. Então boa parte das empresas precisou se digitalizar, provocando um salto expressivo no mercado digital. 

### 3.2 Wireframe

   - Para realizar o projeto  do bootcamp Laboratoria, foi realizado primeiro um protótipo simples (baixa fidelidade) usando papel e lápis. A sua criação foi dividido em: _**telas, explicações e mensagens, arquitetura de informação.**_

   - _**Telas, Mensagens e Botões**_

      - Pensando na facilidade de uso e no pouco tempo que os comerciantes tem para verificar os cartões, a aplicação funcionará apenas na _**Tela Inicial**_, onde possuirá um campo de entrada para inserir os números dos cartões. Após serem inseridos, basta apenas clicar no botão _**Verificar**_ e esperar uns milésimos de segundos para que a resposta apareça logo abaixo desse botão e a mensagem acima do campo de entrada mudará para _**Número do cartão**_. Também o botão _**Validar**_ mudará para _**Inserir outro número**_, não sendo necessário atualizar a página para limpar o campo de entrada.
      - Caso queira limpar a tela, não mostrando nenhum número de cartão, é só clicar na [logo](/src/img/small-logo.png) ou atualizar a página. 

   - _**Arquitetura de Informação**_

      - O mapa dessa aplicação acontecerá em apenas uma página ou nível, por se tratar de uma aplicação simples, onde todas as principais mudanças de informações não acontecerão em outras páginas e sim na mesma página, como as respostas das validações acontecem abaixo do botão Validar e ao limpar o campo de entrada. Além de informações de outras páginas ocorrerem na própria tela inicial, como a página _**Sobre**_ e _**Contatos**_ que usaram [pop-ups](https://tecnoblog.net/responde/o-que-e-pop-up/) e após fechá-las no X, a tela inicial ficará visível, sem a necessidade de carregá-la novamente.

### 3.3 Protótipo Simples com Feedbacks

   - Após o término do Wireframe, foi mostrado a solução para uma das alunas desse bootcamp, para que ela o avaliasse, dando feedbacks sobre ele que foram anotados no próprio papel do protótipo de baixa fidelidade.

     <div>
        <img alt="Protótipo CardVeric de baixa fidelidade" height="300" src="/src/img/to-readme/simple-prototype.jpeg">
     </div>

## 4. Design de Interface (UI)

### 4.1 Marca CardVeric

   - CardVeric é uma empresa fictícia de tecnologia iniciada no bootcamp da Laboratoria, especializada em validação de cartões de crédito e débito, transmitindo uma certeza e alegria quando o cartão é validado. Isso é representado em seu logotipo com o símbolo de check in com cores alegres, como: laranja, amarelo e rosa, mas também transmite a seriedade por meio da tipografia futurista aplicada com o nome da marca. A cor da tipografia e do check in, é um tom alaranjado que é visível tanto para fundos de tela mais claros e escuros.

     <div>
          <img alt="logotipo-cardveric" height="100" src="/src/img/small-logo.png"><img alt="cor-logotipo-cardveric" height="100" src="/src/img/to-readme/logo-color.png">
     </div>

### 4.2 Design Aplicado

   - _**Estilo**_ 
   
      - A aplicação utiliza um estilo _**[flat design](https://www.chiefofdesign.com.br/ui-design/)**_, reduzindo em formas planas, sem sombreamento, sem texturas e reflexos. Ele é focado mais nos conteúdos e uma navegação mais simples, exceto os logos dos emissores de cartão de crédito e débito que possuem outros estilos de design. A estrutura da aplicação escolhida, segue formas geométricas mais retas, sendo arredondados apenas nos vértices de botões e nos pop-ups.

   - _**Tipografia e Hierarquia**_
   
      - A [tipografia](https://www.chiefofdesign.com.br/tipografia/) escolhida possui fonte sem serifa, com a font-family: Arial, Verdana, Helvetica e Sans-Serif. São letras fáceis de serem visualizadas e lidas em aplicações da web.
      - Para o título "Validação de Cartão de Crédito e Débito" da página ser destacado, será utilizado em [caixa alta com alinhamento centralizado](https://www.chiefofdesign.com.br/tipografia-02/). Já para os seguintes textos: "Insira o número do cartão" e "Número do cartão", serão em caixa baixa, mas somente a primeira letra em caixa alta, igualmente para as palavras "Sobre" e "Contatos". 
      - O tamanho dessas duas frases deverão ser pequenas em relação ao título da página e a tipografia encontrada nos botões serão do mesmo tamanho que elas, mas em caixa alta. Para as palavras "Sobre"e "Contatos", deverão ser em tamanhos menores que essas frases.

   - _**Cores**_
   
     - As cores escolhidas para o site foram pensadas em cores que transmitem seriedade e que pudessem ser contrastadas entre a cor do texto e o seu plano de fundo, para facilitar a leitura e legibilidade. Para isso foi utilizado a ferramenta da _[Adobe Color](https://color.adobe.com/pt/create/color-wheel)_ que testa, na parte de acessibilidade, as cores de textos com o seu plano de fundo. Foram testadas com: a cor de plano de fundo da aplicação em si, dos botões e pop-ups. 
     - Para transmitir seriedade e o contraste necessário, foi usado a [Psicologia das Cores](https://www.chiefofdesign.com.br/psicologia-das-cores/#:~:text=J%C3%A1%20foi%20falado%20aqui%20no,imprecisas%20quando%20desconhecemos%20o%20contexto.):

        - _**Azul:**_ presente na maior parte da aplicação, essa cor é usada quando necessita-se transmitir confiança e segurança como prioridade.
        - _**Amarelo:**_ essa cor foi usada para chamar a atenção e transmitir um pouco de alegria, quebrando um pouco a seriedade da aplicação.
        - _**Laranja:**_ usada quando a intenção é transmitir vibração, entusiasmo e humor. Essas qualidades são características de quem é amigável. Laranja foi usado para o título da página por ser uma cor complementar ao azul e por dar contraste para a página no geral.
        - _**Preto, Cinza e Branco:**_ são cores consideradas neutras, podendo ser utilizadas em textos para que haja contraste com o plano de fundo ou ao contrário.

          <div>
            <img alt="logotipo-cardveric" height="100" src="/src/img/to-readme/site-color.png">
          </div>
     
   - _**Transições e Microinterações**_
   
      - As transições e efeitos na páginas serão o mais simples possível e rápidas de serem concluídas, para facilitar o seu uso e não fazer com que os comerciantes percam tempo usando a aplicação, podendo deixarem de usá-la.

### 4.3 Protótipo Validado

   - Depois de todas as ideias e dicas estabelecidas, para validar esse protótipo, foi desenvolvido um novo protótipo (alta fidelidade) usando uma ferramenta digital para protótipo. A ferramenta utilizada foi o Figma, que é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.
   - [Protótipo no Figma](https://www.figma.com/proto/FAdITvw78jNMkHuW1GwmJT/Card-Validation?node-id=78%3A223&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=78%3A223)

## 5. Planejamento do Projeto
  
  - _CardVeric_ é um projeto desenvolvido em 2022, para o bootcamp da [Laboratoria Brasil](https://hub.laboratoria.la/br).
  - Esse projeto é baseado nas instruções apresentadas pelo _README_ do [CardValidation](https://github.com/Laboratoria/SAP007-card-validation.git).

  ### 5.1 Scrum

  1. Para realizar o planejamento foi utilizado o _**Scrum**_, que é uma [metodologia ágil](https://agilemanifesto.org/principles.html) para gestão e planejamento de projetos de software, onde os projetos são divididos em ciclos, chamados de Sprints.
  2. O _**Sprint**_ representa um conjunto de atividades que devem ser executadas. As funcionalidades a serem implementadas em um projeto são mantidas em uma lista que é conhecida como _**Product Backlog**_. 
  3. A cada dia de uma Sprint, há uma breve reunião chamada _**Daily Scrum Meeting**_. O objetivo é disseminar conhecimento sobre o que foi feito no dia anterior, identificar impedimentos e priorizar o trabalho do dia que se inicia, priorizando os itens do _**Product Backlog**_.
  4. Ao final de um Sprint, é apresentado as funcionalidades implementadas em uma _**Sprint Review**_. Finalmente, faz-se uma _**Sprint Retrospective**_ e parte para o planejamento do próximo Sprint. Assim reinicia-se o ciclo.
  
  - Os Sprints da Laboratoria possuem duração de uma semana e são iniciadas todas as sextas-feiras. A Daily é realizada por meio de uma planilha e o Sprint Review é feito todas as quintas-feiras. 

  ### 5.2 Kanban

  - Para facilitar a organização sobre: _**O QUE FAZER, O QUE ESTOU FAZENDO e O QUE FOI FEITO**_, foi utilizado a metodologia _**Kanban**_.
  - O objetivo é supervisionar, gerenciar e controlar o fluxo de tarefas que são feitas em cada etapa da produção. 
  - Ele é dividido em 3 principais colunas: _**To Do, Doing e Done**_, e, os cartões são movidos de coluna para coluna conforme o seu status é mudado. 
  - A ferramenta utilizada para a organização foi o [Trello](https://trello.com/pt-BR) e ela foi dividida em cinco colunas: _**Files, To Do Backlog, To Do, Ongoing e Done.**_
     - _**Files**_: são os arquivos que devem ser entregados ao final do projeto. Servindo mais como um lembrete com checklist especificados no _README_ do [CardValidation](https://github.com/Laboratoria/SAP007-card-validation.git). Eles possuem a etiqueta azul com nome de Files.
     - _**To Do Backlog**_: são os microprojetos a serem feitos por etapas e sequências, ordenado em ordem crescente. Ao final do Scrum, o projeto estará funcionando, mesmo não estando completo com todos os requisitos apresentados no README do CardValidation. Eles possuem a etiqueta rosa com o nome Backlog, mas também poderão ter outras etiquetas com nível de prioridade para fazer o Ongoing. 
     - _**To Do**_: como o projeto é de um bootcamp, nesta coluna estão todos os tópicos a serem estudados, de acordo com o que é necessário para o Backlog. Eles são separados por nível de prioridade de 1 a 6, onde cada cor recebe uma cor.
     - _**Ongoing**_: os cartões do To Do Backlog e To Do são movidos para ele, obedecendo o nível de prioridade conforme o que é necessário estudar para realizar os baby steps (microprojetos). 
     - _**Done**_: nada mais é que os cartões concluídos no Ongoing.

     - ### [KANBAN DO CARDVERIC](https://trello.com/b/e9L8eGe5/lab-primeiro-proj)


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
   7. Para mais informações sobre o produto, clique em `Sobre`.
   8. Em caso de problemas com a aplicação ou deseje tirar dúvidas sobre ela, clique em `Contatos`.

      <div>
          <img alt="" height="300" src="/src/img/to-readme/prototype.gif">
      </div> 

## 7. Ferramentas Utilizadas:

- **Planejamento:**
   - **Scrum:** _[Trello](https://trello.com)_ 

- **UX/UI**:
   - **Edição de Imagens:** _[Canvas](https://www.canva.com/pt_br/)_
   - **Paleta de Cores com Acessibilidade:** _[Adobe Color](https://color.adobe.com/pt/create/color-wheel)_
   - **Protótipo:**  _[Figma](https://www.figma.com/)_
   - **Transforma Vídeo em Gif:** _[Convertio](https://convertio.co/pt/mp4-gif/)_

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
