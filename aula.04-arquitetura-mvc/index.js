//ESTUDAR EJS prova PRATICA
//Importar o Express pra nossa aplicação
// npx (executar pacotes)
// npm start (abreviação do npx nodemon index.js que roda o projeto)
/*digite no packege.json :
  , "type" : "module"
habilita o projeto a utilizar o echema script */
import express from "express"; //ES6 Modules
//criando uma instância do express
const app = express();

//Importando as Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";

//definindo ejs como renderizador de páginas
app.set("view engine", "ejs");

//Definir a pasta dos arquivos estáticos (public)
app.use(express.static("public"));

//definindo o uso das rotas que estão nos Controllers
app.use("/",ClientesController
  //o "/" é para fazer com que ele utilize todas as rotas A PARTIR do ClientesController, neste exemplo
)

//criando a rota principal
app.get("/", (req, res) => {
  //res.send enviar mensagem na principal
  // res.send("<h1>Hello world!</h1><br><hr>");
  //rend.render renderizar a página index.ejs que está na pasta 'views'
  res.render("index");
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
