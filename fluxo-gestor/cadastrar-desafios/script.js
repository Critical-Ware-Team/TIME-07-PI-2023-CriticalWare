const navButton = [
    document.getElementById("nav-button-ideias"),
    document.getElementById("nav-button-desafios"),
    document.getElementById("nav-button-grupos"),
    document.getElementById("nav-button-chat"),
    document.getElementById("nav-button-feedbacks"),
    document.getElementById("nav-button-perfil"),
    document.getElementById("nav-button-configuracoes"),
    document.getElementById("nav-button-sair")
];
navButton[0].addEventListener('click', () => {
    window.location.href = '../gerenciar-ideias';
});
navButton[1].addEventListener('click', () => {
    window.location.reload();
});
navButton[2].addEventListener('click', () => {
    window.location.href = '../gerenciar-grupos';
});
navButton[3].addEventListener('click', () => {
    window.alert("página não desenvolvida");
});
navButton[4].addEventListener('click', () => {
    window.alert("página não desenvolvida");
});
navButton[5].addEventListener('click', () => {
    window.location.href = '../perfil-gestor';
});
navButton[6].addEventListener('click', () => {
    window.alert("página não desenvolvida");
});
navButton[7].addEventListener('click', () => {
    window.location.href = "https://keroinovar.com.br/";
});