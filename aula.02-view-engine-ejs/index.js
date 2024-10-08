//ESTUDAR EJS prova PRATICA
//Importar o Express pra nossa aplicação
// npx (executar pacotes)
// npm start (abreviação do npx nodemon index.js que roda o projeto)
const express = require("express"); //CommonJS Modules
//criando uma instância do express
const app = express();

//definindo ejs como renderizador de páginas
app.set("view engine", "ejs");

//criando a rota principal
app.get("/", (req, res) => {
  //res.send enviar mensagem na principal
  // res.send("<h1>Hello world!</h1><br><hr>");
  //rend.render renderizar a página index.ejs que está na pasta 'views'
  res.render("index");
});

//ROTA PERFIL
//: dois pontos representa entrada de parametro
//:nome é um parâmetro obrigatório
//:nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  //coletando o parâmetro e guardando na variável
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
  });
});

//ROTA DE VÍDEOS
//:playlist? e :video? parametros opcionais
app.get("/videos/:playlist?", (req, res) => {
  const playlist = req.params.playlist;
  res.render("videos", {
    playlist: playlist,
  });
});

//rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["PC", "Tablet", "Notebook", "Celular", "Monitor"];
  const produto = req.params.produto;
  res.render("produtos", {
    //enviando variável para a página
    //V será chamado na página
    produto: produto, //< variável que na index (req.params)
    listaProdutos: listaProdutos,
    //Na página produtos.ejs haverá uma testagem de condição
  });
});

//rota de pedidos
app.get("/pedidos", (req, res) => {
  const pedidos = [
    {
      produto: "Celular",
      valor: 3000,
    },
    {
      produto: "PC",
      valor: 4000,
    },
    {
      produto: "Tablet",
      valor: 2000,
    },
    {
      produto: "Notebook",
      valor: 3800,
    },
    {
      produto: "Monitor",
      valor: 2000,
    },
  ];
  res.render("pedidos", {
    //enviando array de objetos:
    pedidos: pedidos,
  });
});

//iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
