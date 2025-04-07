// Adiciona um listener para o envio do formulário
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita o envio do formulário

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Validação do campo nome
  if (!nome) {
    alert("Por favor, preencha o campo Nome.");
    return;
  }

  // Validação do campo email
  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Validação do campo mensagem
  if (!mensagem) {
    alert("Por favor, escreva uma mensagem.");
    return;
  }

  // Se tudo estiver correto, mostra mensagem de sucesso e limpa os campos
  alert("Mensagem enviada com sucesso!");
  document.getElementById("form-contato").reset();
});
