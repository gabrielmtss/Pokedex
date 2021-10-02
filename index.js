const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

let pokedex = [];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index", {pokedex: pokedex});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/new", (req, res) => {
  const objeto01 = {numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  pokedex.push(objeto01);
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);