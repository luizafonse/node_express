import express from "express"; //es6 modules
const router = express.Router();

//rota de clientes
router.get("/clientes", (req, res) => {
  const clientes = [
    {
      nome: "Skibiddy Toilet da Silva",
      cpf: "123.456.789-00",
      endereco: "Rua Simpson Gamer 123 - Bairro Windows - Xique-Xique - BA",
    },
    {
      nome: "Skibiddy Toilet da Silva",
      cpf: "123.456.789-00",
      endereco: "Rua Simpson Gamer 123 - Bairro Windows - Xique-Xique - BA",
    },
    {
      nome: "Skibiddy Toilet da Silva",
      cpf: "123.456.789-00",
      endereco: "Rua Simpson Gamer 123 - Bairro Windows - Xique-Xique - BA",
    },
    {
      nome: "Skibiddy Toilet da Silva",
      cpf: "123.456.789-00",
      endereco: "Rua Simpson Gamer 123 - Bairro Windows - Xique-Xique - BA",
    },
  ];
  res.render("clientes",
    {
      clientes: clientes,
    });
});
export default router;
