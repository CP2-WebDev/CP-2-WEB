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
