/* ==================================================
   ENVIO DE MENSAGEM PELO WHATSAPP (FORMULÁRIO)
================================================== */

function enviarWhatsApp(event) {
  event.preventDefault();

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Validação simples
  if (nome === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos antes de enviar!");
    return;
  }

  // Número que receberá as mensagens
  const telefone = "5541987395060";

  // Monta a mensagem personalizada
  const texto = `Olá! Me chamo ${nome}, ${mensagem}`;

  // Converte caracteres especiais para URL
  const msgFormatada = encodeURIComponent(texto);

  // Gera o link do WhatsApp
  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  // Abre o WhatsApp em uma nova aba
  window.open(url, "_blank");
}


/* ==================================================
   BOTÃO "ENTRE EM CONTATO"
================================================== */

// Ao clicar no botão principal do topo,
// abre uma conversa direta no WhatsApp

document
  .getElementById("btn-whatsapp")
  .addEventListener("click", function () {

    const numero = "5541987395060";

    const mensagem =
      "Olá Sarah! Vi seu portfólio e gostaria de conversar.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });


/* ==================================================
   EFEITO HOVER DOS PROJETOS
================================================== */

// Mostra informações extras ao passar o mouse
// sobre os cards dos projetos

document.querySelectorAll(".projeto").forEach((card) => {
  const info = card.querySelector(".info-projetos");

  card.addEventListener("mouseenter", () => {
    info.style.opacity = "1";
    info.style.transform = "translateY(0)";
  });

  card.addEventListener("mouseleave", () => {
    info.style.opacity = "0.7";
    info.style.transform = "translateY(10px)";
  });
});


/* ==================================================
   BOTÃO "VOLTAR AO TOPO"
================================================== */

// Cria o botão dinamicamente pelo JavaScript

const botaoTopo = document.createElement("button");

botaoTopo.textContent = "↑ Topo";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";

botaoTopo.style.padding = "10px 15px";
botaoTopo.style.fontSize = "16px";

botaoTopo.style.background = "var(--primaria)";
botaoTopo.style.color = "var(--claro)";

botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "8px";

botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "1000";

// Adiciona o botão na página
document.body.appendChild(botaoTopo);


/* ==================================================
   ROLAGEM SUAVE PARA O TOPO
================================================== */

// Quando clicar no botão, sobe suavemente

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


/* ==================================================
   EXIBE OU ESCONDE O BOTÃO
================================================== */

// Mostra o botão somente após
// o usuário rolar 300px da página

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});