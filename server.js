const BACKEND_URL = "https://login-123-1.onrender.com"; // seu backend no Render

async function cadastrar() {
  const nome = document.getElementById("c_nome").value;
  const email = document.getElementById("c_email").value;
  const senha = document.getElementById("c_senha").value;

  try {
    const res = await fetch(`${BACKEND_URL}/cadastrar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha })
    });

    const data = await res.json();
    alert(data.mensagem || data.erro);
  } catch (err) {
    alert("Erro ao conectar com o servidor");
  }
}

async function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    const res = await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha })
    });

    const data = await res.json();
    alert(data.mensagem || data.erro);
  } catch (err) {
    alert("Erro ao conectar com o servidor");
  }
}
