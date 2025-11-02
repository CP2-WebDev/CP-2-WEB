let imagens = [
    '/src/assets/imgs/hell.webp.png',
    '/src/assets/imgs/perigosa.jpg.png',
    '/src/assets/imgs/abstrax.webp.png',
    '/src/assets/imgs/cacau.webp.png',
    '/src/assets/imgs/dogma.webp.png',
    '/src/assets/imgs/locomotive.png',
];
let tempo = 2300;

let i = 0;

function slideShow(){
    document.getElementById("img").src=imagens[i];
    i++;
    if(i >= imagens.length){
        i=0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();