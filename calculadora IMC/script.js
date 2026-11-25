
function calcularIMC() {

    // Pegando os valores digitados pelo usuário
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    // Verificando se os campos foram preenchidos
    if (peso == "" || altura == "") {
        document.getElementById("resultado").innerHTML =
            "Preencha todos os campos!";
        return;
    }

    peso = Number(peso);
    altura = Number(altura);

    if (peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Digite valores válidos!";
        return;
    }

    // Fazendo o cálculo do IMC
    var imc = peso / (altura * altura);

    var classificacao = "";

    // Verificando a classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc < 25) {
        classificacao = "Peso adequado";
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso";
    }
    else if (imc < 35) {
        classificacao = "Obesidade grau I";
    }
    else if (imc < 40) {
        classificacao = "Obesidade grau II";
    }
    else {
        classificacao = "Obesidade grau III";
    }

    // Mostrando o resultado na tela
    document.getElementById("resultado").innerHTML =
        "Seu IMC é: " + imc.toFixed(2) +
        "<br>Classificação: " + classificacao;

}
