const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Caminho do arquivo
const FILE_PATH = "./usuarios.json";

// Se o arquivo não existir, cria
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// Ler usuários do arquivo
function lerUsuarios() {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
}

// Salvar usuários no arquivo
function salvarUsuarios(usuarios) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(usuarios, null, 2));
}

// Rota para cadastrar usuário (LOGIN)
app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const usuarios = lerUsuarios();

  usuarios.push({ email, senha });

  salvarUsuarios(usuarios);

  res.json({ mensagem: "  salvo com sucesso!" });
});

// Rota para listar usuários
app.get("/usuarios", (req, res) => {
  const usuarios = lerUsuarios();
  res.json(usuarios);
});

app.listen(3000, () =>
  console.log("Servidor rodando em: http://localhost:3000")
);
