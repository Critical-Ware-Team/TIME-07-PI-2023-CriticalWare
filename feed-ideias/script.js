const navButton = [
    document.getElementById("nav-button-pagina_inicial"),
    document.getElementById("nav-button-grupos"),
    document.getElementById("nav-button-desafios"),
    document.getElementById("nav-button-cadastrar_ideias"),
    document.getElementById("nav-button-chat"),
    document.getElementById("nav-button-feedbacks"),
    document.getElementById("nav-button-perfil"),
    document.getElementById("nav-button-configuracoes"),
    document.getElementById("nav-button-sair")
];
navButton[0].addEventListener('click', () => {
    // window.location.href = "../grupos-colaborador/;"
    console.log("esta tela não foi desenvolvida");
});
navButton[1].addEventListener('click', () => {
    window.location.href = "../grupos-colaborador/";
});
navButton[2].addEventListener('click', () => {
    window.location.href = "../feed-desafios/";
});
navButton[3].addEventListener('click', () => {
    window.location.href = "../cadastrar-ideias/";
});
navButton[4].addEventListener('click', () => {
    window.location.href = "../chat-colaborador_home/";
});
navButton[5].addEventListener('click', () => {
    // window.location.href = "../feedbacks/;"
    console.log("esta tela não foi desenvolvida");
});
navButton[6].addEventListener('click', () => {
    window.location.href = "../perfil-colaborador/";
});
navButton[7].addEventListener('click', () => {
    window.location.href = "../configuracoes/";
});
navButton[8].addEventListener('click', () => {
    window.location.href = "https://keroinovar.com.br/";
});