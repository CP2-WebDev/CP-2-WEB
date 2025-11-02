let imagens = [
    '/src/assets/imgs/hell.webp.png',
    '/src/assets/imgs/mistery.png',
    '/src/assets/imgs/motim.webp.png',
    '/src/assets/imgs/cacau.webp.png',
    '/src/assets/imgs/dogma.webp.png',
    '/src/assets/imgs/locomotive.png',
    '/src/assets/imgs/solenne.webp.png',
    '/src/assets/imgs/helles.webp.png'
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