const dataNascimentoInput = document.getElementById("data-nascimento")

dataNascimentoInput.addEventListener("input", function () {
  this.value = this.value
    .replace(/\D/g, "") // Remove caracteres não numéricos
    .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3") // Insere as barras na posição correta
    .slice(0, 10) // Limita o campo a 10 caracteres
})

dataNascimentoInput.addEventListener("keypress", function (event) {
  if (!/[\d\s]/.test(event.key)) {
    event.preventDefault()
    alert("Este campo só pode ser preenchido com números.")
  }
})

dataNascimentoInput.addEventListener("blur", function () {
  if (this.value.length !== 10) {
    alert("Por favor, preencha a data de nascimento no formato DD/MM/AAAA.")
  }
})

const alterarDadosButton = document.getElementById("alterar-dados")

alterarDadosButton.addEventListener("click", function () {
  // Aqui você pode adicionar a lógica para alterar os dados
  alert("Dados alterados com sucesso!")
})
