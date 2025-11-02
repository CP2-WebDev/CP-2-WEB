document.getElementById("quiz-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // coleta respostas
  let p1 = document.querySelector('input[name="pergunta1"]:checked');
  let p2 = document.querySelector('input[name="pergunta2"]:checked');
  let p3 = document.querySelector('input[name="pergunta3"]:checked');
  let p4 = document.querySelector('input[name="pergunta4"]:checked');

  if (!p1 || !p2 || !p3 || !p4) {
    alert("Por favor, responda todas as perguntas antes de enviar!");
    return;
  }

  // pontuação de cada opção
  let sabores = { leve: 0, doce: 1, intenso: 2, amargo: 3 };
  let ocasioes = { churrasco: 0, jantar: 1, festas: 2, relaxar: 3 };
  let temperaturas = { gelada: 0, fria: 1, fresca: 2, ambiente: 3 };
  let comidas = { carne: 0, peixe: 1, massa: 2, aperitivos: 3 };

  // calcula índice (0 a 255)
  let indice =
    sabores[p1.value] * 64 +
    ocasioes[p2.value] * 16 +
    temperaturas[p3.value] * 4 +
    comidas[p4.value];

  // divide igualmente em 16 grupos
  let tipos = [
    " Itaipava — leve e refrescante, perfeita para churrascos e encontros casuais.",
    " Roleta Russa IPA — clara e suave, ideal para acompanhar frutos do mar.",
    " Schornstein All Day — equilibrada e frutada, ótima com massas e queijos.",
    " Ouropretana American — cremosa e levemente doce, excelente para festas e celebrações.",
    " Dádiva Abstrax West Coast Double — cítrica e leve, combina com peixes e pratos leves.",
    " Evermaine — aromática e complexa, ideal para relaxar.",
    " Cerveja holandesa 8.6 Red — maltada e encorpada, perfeita com carnes vermelhas.",
    " Trooper Iron Maiden — escura e forte, ideal para churrascos e carnes defumadas.",
    " Hell — equilibrada, une leveza da lager com o amargor da IPA.",
    " Mystery — leve e dourada, ótima para eventos e comemorações.",
    " Motim — frutada e seca, refrescante para dias quentes.",
    " Cacau IPA — com notas de café e chocolate, ótima para noites frias.",
    " Dogma — intensa e marcante, para os que buscam potência.",
    " Locomotive — caramelada e doce, perfeita para petiscos e festas.",
    " Solenne — equilibrada e cítrica, perfeita com massas e molhos ricos.",
    " Alemã Erdinger Helles — amarga e aromática, ideal para quem gosta de sabores marcantes.",
  ];

  // seleciona o grupo
  let tipoSelecionado = tipos[Math.floor(indice / 16)];

  // mostra resultado com link clicável
let resultadoDiv = document.createElement("div");
resultadoDiv.classList.add("resultado");

// cria link com base no tipo selecionado
let linksCervejas = {
  "Itaipava": "../pages/itaipava.html",
  "Roleta Russa IPA": "../pages/Roletarussa.html",
  "Schornstein All Day": "../pages/SchornsteinAllDay.html",
  "Ouropretana American": "../pages/ouropretanaamerican.html",
  "Dádiva Abstrax West Coast Double": "../pages/Dadivaabstrax.html",
  "Evermaine": "../pages/everbrewevermaine.html",
  "Cerveja holandesa 8.6 Red": "../pages/holandesa86red.html",
  "Trooper Iron Maiden": "../pages/TrooperIronMaiden.html",
  "Hell": "../pages/hell.html",
  "Mystery": "../pages/mistery.html",
  "Motim": "../pages/motim.html",
  "Cacau IPA": "../pages/cacau.html",
  "Dogma": "../pages/dogma.html",
  "Locomotive": "../pages/locomotive.html",
  "Solenne": "../pages/solenne.html",
  "Alemã Erdinger Helles": "../pages/erdinger.html"
};

// procura qual cerveja o tipoSelecionado contém
let nomeCerveja = Object.keys(linksCervejas).find(nome => tipoSelecionado.includes(nome));
let link = nomeCerveja ? linksCervejas[nomeCerveja] : "#";

// cria HTML com link
resultadoDiv.innerHTML = `
  <h3>Sua cerveja ideal é:</h3>
  <p><a href="${link}" target="_blank" class="link-cerveja">${tipoSelecionado}</a></p>
`;

let container = document.getElementById("resultado-container");
container.innerHTML = "";
container.appendChild(resultadoDiv);
resultadoDiv.scrollIntoView({ behavior: "smooth" });
});