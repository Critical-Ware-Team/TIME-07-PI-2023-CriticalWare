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
    // window.location.href = "../feed-inicial/;"
    window.alert("página não desenvolvida");
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
    window.location.href = "../chat-colaborador/home/";
});
navButton[5].addEventListener('click', () => {
    // window.location.href = "../feedbacks/;"
    window.alert("página não desenvolvida");
});
navButton[6].addEventListener('click', () => {
    window.location.reload();
});
navButton[7].addEventListener('click', () => {
    window.location.href = "../configuracoes/";
});
navButton[8].addEventListener('click', () => {
    window.location.href = "https://keroinovar.com.br/";
});

window.onload = () =>{
    fetch("../../jsons/usuarios.json")
        .then((res) => res.json())
        .then((jsonUsuarios) => {
            // preenche perfil
            document.getElementsByClassName("container-perfil")[0].innerHTML = `
            <img src="${jsonUsuarios.colaboradores[0].urlImg}" alt="Foto de Perfil">
            <div class="infos-perfil">
                <h2>${jsonUsuarios.colaboradores[0].nome}</h2>
                <p>Desafios inscritos: ${jsonUsuarios.colaboradores[0].desafios.length}</p>
                <p>Ideias: ${jsonUsuarios.colaboradores[0].desafios.length}</p>
                <p>Local: ${jsonUsuarios.colaboradores[0].local}</p>
                <p>Setor: ${jsonUsuarios.colaboradores[0].setor}</p>
                <p>Unidade: ${jsonUsuarios.colaboradores[0].unidade}</p>
            </div>`;
            //renderiza grupos
            fetch("../../jsons/grupos.json")
                .then((res) => res.json())
                .then((jsonGrupos) => {
                    for(let i=0; i<jsonGrupos.grupos.length; i++){
                        for(let j=0; j<jsonUsuarios.colaboradores[0].desafios.length; j++){
                            if(jsonUsuarios.colaboradores[0].grupos[j] === jsonGrupos.grupos[i].id){
                                if(jsonGrupos.grupos[i].urlImg === ""){
                                    document.getElementsByClassName("img-row-grupos")[0].innerHTML += `
                                    <div class="grupo-sem-foto grupo-sem-foto-cor2">
                                        <p>#${jsonGrupos.grupos[i].id}</p>
                                    </div>`;
                                }
                                else{
                                    document.getElementsByClassName("img-row-grupos")[0].innerHTML += `
                                        <img src="${jsonGrupos.grupos[i].urlImg}" alt="">`;
                                }
                            }
                        }
                    }
                })
                .catch((err) => console.err(err));//catch da renderização de grupos
            //renderiza ideias
            fetch("../../jsons/ideias.json")
                .then((res) => res.json())
                .then((jsonIdeias) => {
                    for(let i=0; i<jsonIdeias.ideias.length; i++){
                        for(let j=0; j<jsonUsuarios.colaboradores[0].ideias.length; j++){
                            if(jsonIdeias.ideias[i].id === jsonUsuarios.colaboradores[0].ideias[j])
                            {
                                document.getElementsByClassName("image-row-ideias")[0].innerHTML += `
                                <div class="card-ideia">
                                    <div class="img-cropper-ideias">
                                        <img src="${jsonIdeias.ideias[i].urlImg}" alt="Capa da ideia ${jsonIdeias.ideias[i].titulo}">
                                    </div>
                                    <h3>${jsonIdeias.ideias[i].titulo}</h3>
                                </div>`;
                                if(jsonIdeias.ideias[i].urlImg === ""){
                                    let cards = document.getElementsByClassName('card-ideia');
                                    cards[(cards.length)-1].classList.add("ideia-sem-foto");
                                }
                            }
                        }
                    }
                })
                .catch((err) => console.err(err));//catch da renderização de ideias
            //preenche dados de contato
            document.getElementsByClassName("infos")[0].innerHTML = `
            <p>Email: ${jsonUsuarios.colaboradores[0].contato.email}</p>
            <p>Celular: ${jsonUsuarios.colaboradores[0].contato.celular}</p>`;
            //renderiza desafios
            fetch("../../jsons/desafios.json")
                .then((res) => res.json())
                .then((jsonDesafios) => {
                    for(let i=0; i<jsonDesafios.desafios.length; i++){
                        for(let j=0; j<jsonUsuarios.colaboradores[0].desafios.length; j++){
                            if(jsonDesafios.desafios[i].id === jsonUsuarios.colaboradores[0].desafios[j])
                            {
                                if(jsonDesafios.desafios[i].urlImg === ""){
                                    document.getElementsByClassName("container-desafios-inscritos")[0].innerHTML+=`
                                    <div class="desafio-sem-foto">
                                        <h3>${jsonDesafios.desafios[i].titulo}</h3>
                                    </div>`;
                                }
                                else{
                                    document.getElementsByClassName("container-desafios-inscritos")[0].innerHTML+=`
                                    <div class="img-cropper-desafios">
                                        <img src="${jsonDesafios.desafios[i].urlImg}" alt="Capa do desafio ${jsonDesafios.desafios[i].titulo}">
                                    </div>`;
                                }
                            }
                        }
                    }
                })
                .catch((err) => console.err(err));//catch da renderização dos desafios
        })
        .catch((err) => console.err(err));//catch da renderização do usuário
}