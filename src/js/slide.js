let imagens = [
    '../assets/imgs/hell.webp.png',
    '../assets/imgs/mistery.png',
    '../assets/imgs/motim.webp.png',
    '../assets/imgs/cacau.webp.png',
    '../assets/imgs/dogma.webp.png',
    '../assets/imgs/locomotive.png',
    '../assets/imgs/Solenne.webp.png',
    '../assets/imgs/Helles.webp.png'
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