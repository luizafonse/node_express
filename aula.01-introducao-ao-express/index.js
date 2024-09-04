//Importar o Express pra nossa aplicação
const express = require("express"); //CommonJS Modules
//criando uma instância do express
const app = express();

//criando a rota principal
app.get("/", function(req,res){
    res.send("Hello world!")
})

//iniciando o servidor na porta 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso.");
  }
});
