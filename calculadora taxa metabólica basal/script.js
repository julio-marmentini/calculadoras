
function calcularTMB() {

    // Pegando os valores digitados pelo usuário
    var sexo = document.getElementById("sexo").value;
    var idade = Number(document.getElementById("idade").value);
    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    // Verificando se os campos foram preenchidos
    if (sexo == "" || idade <= 0 || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").innerHTML =
            "Preencha todos os campos corretamente!";
        return;
    }

    var tmb = 0;

    // Calculando a taxa metabólica basal
    if (sexo == "masculino") {

        tmb = 88.362 + (13.397 * peso) +
              (4.799 * altura) - (5.677 * idade);

    } else {

        tmb = 447.593 + (9.247 * peso) +
              (3.098 * altura) - (4.330 * idade);

    }

    // Mostrando o resultado na tela
    document.getElementById("resultado").innerHTML =
        "Sua Taxa Metabólica Basal é:<br>" +
        tmb.toFixed(0) + " calorias por dia";

}
