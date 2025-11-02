#  Cervejaria Agnello

##  Visão Geral  
A **Cervejaria Agnello** é um projeto web interativo e responsivo, desenvolvido com **HTML5**, **CSS3** e **JavaScript**, com o objetivo de simular uma **loja de cervejas artesanais**.  
O site oferece uma experiência de navegação completa, com catálogo de produtos, quiz personalizado, sistema de carrinho e área de login.

O projeto combina **design elegante e funcionalidade prática**, mantendo a identidade artesanal e moderna da marca.

---

##  Estrutura de Pastas

```
Cervejaria-Agnello/
│
├── index.html
│
├── src/
│   ├── assets/
│   │   └── imgs/
│   │       ├── LOGO.png
│   │       ├── abstrax.webp.png
│   │       ├── ironmaiden.webp.png
│   │       ├── cacau.webp.png
│   │       ├── hell.webp.png
│   │       ├── dogma.webp.png
│   │       ├── mistery.png
│   │       ├── locomotive.png
│   │       ├── Helles.webp.png
│   │       └── ouropretana.webp.png
│   │
│   ├── css/
│   │   ├── index.style.css
│   │   ├── comprar.pagina.css
│   │   ├── pagina1.style.css
│   │   ├── pagina2.style.css
│   │   ├── pagina3.style.css
│   │   ├── pagina4.style.css
│   │   ├── pagina5.style.css
│   │   ├── confirmacao.css
│   │   └── efeitos.css
│   │
│   ├── js/
│   │   ├── script.js
│   │   ├── quiz.js
│   │   ├── idade.js
│   │   └── slide.js
│   │
│   └── pages/
│       ├── pagina1.html         → Quiz de recomendação
│       ├── pagina2.html         → Carrinho
│       ├── pagina3.html         → Sobre nós
│       ├── pagina4.html         → Clube do Malte
│       ├── pagina5.html         → Login / Registrar-se
│       ├── confirmacao.html     → Tela de compra concluída
│       ├── slideshow.html       → Catálogo dinâmico
│       └── Páginas individuais de produtos
│
└── README.md
```

---

##  Tecnologias Utilizadas  

| Tecnologia | Descrição |
|-------------|------------|
| **HTML5** | Estrutura e semântica das páginas |
| **CSS3** | Design, responsividade e identidade visual |
| **JavaScript (ES6)** | Interatividade e dinamicidade das páginas |
| **Flexbox** | Organização flexível dos elementos |
| **Git / GitHub** | Controle de versão e hospedagem do código |

---

##  Estrutura do Projeto

###  **index.html**
- Página inicial com a **logo da marca**, menu principal e **galeria de cervejas**.  
- Contém os botões de seleção de **tema de cor** e links para todas as páginas.  

---

###  **Páginas de Produtos**
Cada produto possui sua página individual com:
- Nome, imagem e preço;
- Botão “Adicionar ao Carrinho” que leva à página de confirmação;
- Design responsivo e coerente com a identidade da marca.

Exemplos:
- *Cerveja Dogma Weiss 473ml — R$32,99*  
- *Cerveja Motim Dubhlinn Dry Stout — R$24,90*

---

###  **pagina2.html – Carrinho**
- Simula o carrinho de compras;
- Exibe mensagem padrão quando não há itens (“Seu carrinho está vazio”).

---

###  **pagina1.html – Quiz de Cervejas**
- Quiz interativo que recomenda uma cerveja com base nas preferências do usuário.  
- Lógica implementada em `quiz.js`, que:
  - Calcula um **índice de perfil de consumo**;
  - Recomenda uma cerveja ideal com link direto à sua página.  

---

###  **pagina3.html – Sobre Nós**
- Conta a **história da Cervejaria Agnello**, destacando:
  - Origem familiar;
  - Processo artesanal de produção;
  - Atendimento especializado e cultura cervejeira.

---

###  **pagina4.html – Clube do Malte**
- Explica o **serviço de assinatura mensal** da cervejaria.  
- Descreve curadoria de rótulos, benefícios e possibilidade de cancelamento livre.  

---

###  **pagina5.html – Login / Registrar-se**
- Formulário duplo (login e cadastro) com layout flexível.  
- Estilização moderna e responsiva (`pagina5.style.css`).  
- Inputs com foco, sombra e botões personalizados.  

---

###  **confirmacao.html**
- Exibe mensagem “Obrigado pela compra!” e animação `confirmado.gif`.  

---

###  **slideshow.html**
- Mostra as cervejas em **exibição automática**, controlada por `slide.js`.  

---

##  Scripts JavaScript

| Arquivo | Função |
|----------|--------|
| **script.js** | Controla o **tema de cores do site**, alterando o fundo e cabeçalho dinamicamente. |
| **idade.js** | Exibe **aviso de idade**, redirecionando menores de 18 anos. |
| **quiz.js** | Gerencia toda a lógica do **quiz de recomendação**, com cálculo de respostas e exibição do resultado. |
| **slide.js** | Implementa o **slideshow automático** de produtos na página de catálogo. |

---


##  Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/CP2-WebDev/CP-2-WEB.git
   ```

2. Acesse a pasta:


3. Execute o arquivo principal:
   - Clique em **index.html**  
   - Ou abra no **VS Code** com a extensão **Live Server**


---

##  Equipe de Desenvolvimento  

**Projeto desenvolvido por alunos da FIAP – Engenharia De Software.**

 **Integrantes:**
- Gabriel Ardito Manes  
- João Sarracine Souza  
- João Pedro Gonzales  

---

Link Do Projeto No Github Pages:
https://cp2-webdev.github.io/CP-2-WEB/

---

##  Licença
Este projeto é de caráter **educacional e acadêmico**, sem fins comerciais.  

---


##  Conclusão
A **Cervejaria Agnello** une **design, interatividade e experiência de usuário** em um ambiente web funcional e agradável.  
O resultado é uma plataforma que celebra o universo das cervejas artesanais com tecnologia e criatividade. 
