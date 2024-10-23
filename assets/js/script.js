const imagens = [
    "./assets/images/Silksong-Screenshots-_0003_17.png",
    "./assets/images/Silksong-Screenshots-_0006_14.png",
    "./assets/images/Silksong-Screenshots-_0009_11.png",
    "./assets/images/Silksong-Screenshots-_0004_16.png",
    "./assets/images/Silksong-Screenshots-_0014_6.png"
];

let indice = 0;

function trocarImagem() {
    const imagem = document.getElementById("imagem");
    indice = (indice + 1) % imagens.length;
    imagem.src = imagens[indice];
}
