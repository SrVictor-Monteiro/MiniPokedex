alert("Bem vindo! Não esqueça de seguir.");
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body =
  document.querySelector("body"); 
const imagemBotaoTrocarTema = document.querySelector(".sol");

botaoAlterarTema.addEventListener("click", () => {
  const temaEscuroAtivo = body.classList.contains("tema-escuro");
  body.classList.toggle("tema-escuro");
  if (temaEscuroAtivo) {
    imagemBotaoTrocarTema.setAttribute("src", "./imagens/sun.png");
  } else {
    imagemBotaoTrocarTema.setAttribute("src", "./imagens/moon.png");
  }
});
