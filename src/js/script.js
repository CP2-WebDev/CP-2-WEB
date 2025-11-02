 let armazenar = 0;

  function verificarIdade() {
    // só mostra se ainda não foi clicado antes
    if (armazenar === 0) {
      document.write(`
        <div id="avisoIdade" style="
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.9);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          font-family: sans-serif;
          text-align: center;
        ">
          <h2>Você tem 18 anos ou mais?</h2>
          <button id="sim" style="margin: 10px; padding: 10px 20px; background: green; color: white; border: none; border-radius: 5px; cursor: pointer;">Sou maior de 18</button>
          <button id="nao" style="margin: 10px; padding: 10px 20px; background: red; color: white; border: none; border-radius: 5px; cursor: pointer;">Não sou</button>
        </div>
      `);

      // Espera o HTML ser criado
      window.onload = function() {
        document.getElementById("sim").onclick = function() {
          document.getElementById("avisoIdade").remove(); // tira o aviso
          armazenar = 1; // marca que já clicou
        };

        document.getElementById("nao").onclick = function() {
          alert("Desculpe, este site é apenas para maiores de idade.");
          window.location.href = "https://www.google.com";
        };
      };
    }
  }

  // chama a função assim que o script carrega
  verificarIdade();


function trocar(cor) {
  // muda o fundo do site
  document.body.style.background = cor;

  // define cores de texto e do header/menu
  let corTexto;
  let corHeader;

  if (cor === "#004EB5") {          // vinho
    corTexto = "white";
    corHeader = "#003985ff";

  } else if (cor === "#454545") {   // cinza escuro
    corTexto = "white";
    corHeader = "#2E2E2E";

  } else if (cor === "#ffffffff") {   // claro
    corTexto ="black";
    corHeader = "#b9b9b9ff";
  }

  // muda a cor do texto do site
  document.body.style.color = corTexto;

  // muda a cor dos links do menu
  let links = document.querySelectorAll(".menu a");
  for (let i = 0; i < links.length; i++) {
    document.documentElement.style.setProperty("--cor-texto", corTexto);
  }

  // muda a cor do header
  let header = document.querySelector(".partePreta");
  header.style.background = `linear-gradient(#F5D3C1, ${corHeader})`;

  // muda a cor do fundo do menu
  let menu = document.querySelector(".menu");
  menu.style.backgroundColor = corHeader;

  let footer = document.querySelector(".copy");
  footer.style.backgroundColor = corHeader;

  let login = document.querySelector("#login");
  login.style.backgroundColor = corHeader;

  let cadastrar = document.querySelector("#cadastrar");
  cadastrar.style.backgroundColor = corHeader;

  document.documentElement.style.setProperty("--cor-texto", corTexto);
}

