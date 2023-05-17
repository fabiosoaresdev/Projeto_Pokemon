const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const botaoEscuro = document.getElementById("botao-escuro")
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")



botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro") 
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png") }
    else {
            body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")};
    

});

