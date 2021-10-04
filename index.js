const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

let message = "";
let pokedex = [
  {numero:"448",
  nome:"Lucario",
  tipo:"Fighting/Steel",
  imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png",
  descricao:"It controls waves known as auras, which are powerful enough to pulverize huge rocks. It uses these waves to take down its prey.",
  altura:"1.2 m",
  peso:"54.0 kg",
  categoria:"Aura",
  habilidade:"Inner Focus/Steadfast"},
  {numero:"658",
  nome:"Greninja",
  tipo:"Water/Dark",
  imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
  descricao:"It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
  altura:"1.5 m",
  peso:"40.0 kg",
  categoria:"Ninja",
  habilidade:"Torrent"},
  {numero:"003",
  nome:"Venusaur",
  tipo:"Grass/Poison",
  imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  descricao:"Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
  altura:"2.0 m",
  peso:"100.0 kg",
  categoria:"Seed",
  habilidade:"Overgrow"}
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {

  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {pokedex: pokedex, message});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

app.post("/new", (req, res) => {
  const objeto01 = {numero, nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  pokedex.push(objeto01);
  message = `O pokémon ${nome} foi cadastrado com sucesso!`;
  res.redirect("/");
});

app.get("/detalhes/:pokeNum", (req, res) => {
  const poke = req.params.pokeNum
  const pokemon = pokedex[poke]
  res.render("detalhes", {pokemon});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);