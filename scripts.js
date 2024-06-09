function cliqueinobotao() {
    const valorminimo = Math.ceil(document.querySelector(".valor-minimo") .value)
    const valormaximo = Math.floor(document.querySelector(".valor-maximo") .value)

    const resultado = Math.floor(Math.random() * (valormaximo - valorminimo + 1)) + valorminimo;
    alert(resultado)
}
