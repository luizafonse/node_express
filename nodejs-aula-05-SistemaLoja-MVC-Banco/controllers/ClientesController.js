import express from "express";
const router = express.Router();
//IMPORTANDO O MODEL DO CLIENTE
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

//rota de cadastro de clientes
router.post("/clientes/new", (req, res) => {
  //recebendo os dados do formulario e gravando nas variaveis
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    //PROMISE (.then)
  }).then(() => {
    res.redirect("/clientes");
  });
});

//Rota de exclusao
//essa rota possui um parametro ID
router.get("/clientes/delete/:id", (req, res) => {
  //coletar o id que veio na url
  const id = req.params.id;
  //metodo para excluir
  Cliente.destroy({
    where: {
      id: id,
    },
  }).then(() => {
      res.redirect("/clientes");
    }).catch((error) => {
      console.log(error);
    });
});

export default router;
