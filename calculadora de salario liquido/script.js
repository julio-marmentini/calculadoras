
function calcularSalario() {

    // Pegando os valores digitados pelo usuário
    var salario = Number(document.getElementById("salario").value);
    var dependentes = Number(document.getElementById("dependentes").value);
    var outros = Number(document.getElementById("outros").value);

    // Verificando se os campos estão preenchidos corretamente
    if (salario <= 0 || dependentes < 0 || outros < 0 ||
        !Number.isInteger(dependentes)) {

        document.getElementById("resultado").innerHTML =
            "Digite valores válidos!";
        return;
    }

    // Calculando o desconto do INSS
    var inss = 0;

    if (salario <= 1621) {
        inss = salario * 0.075;
    }
    else if (salario <= 2902.84) {
        inss = (1621 * 0.075) +
               ((salario - 1621) * 0.09);
    }
    else if (salario <= 4354.27) {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((salario - 2902.84) * 0.12);
    }
    else if (salario <= 8475.55) {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((4354.27 - 2902.84) * 0.12) +
               ((salario - 4354.27) * 0.14);
    }
    else {
        inss = (1621 * 0.075) +
               ((2902.84 - 1621) * 0.09) +
               ((4354.27 - 2902.84) * 0.12) +
               ((8475.55 - 4354.27) * 0.14);
    }

    // Calculando a base do Imposto de Renda
    var descontoDependentes = dependentes * 189.59;

    var descontoLegal = inss + descontoDependentes;

    // Comparando com o desconto simplificado
    if (descontoLegal < 607.20) {
        descontoLegal = 607.20;
    }

    var baseIR = salario - descontoLegal;

    // Calculando o Imposto de Renda
    var irrf = 0;

    if (baseIR <= 2428.80) {
        irrf = 0;
    }
    else if (baseIR <= 2826.65) {
        irrf = (baseIR * 0.075) - 182.16;
    }
    else if (baseIR <= 3751.05) {
        irrf = (baseIR * 0.15) - 394.16;
    }
    else if (baseIR <= 4664.68) {
        irrf = (baseIR * 0.225) - 675.49;
    }
    else {
        irrf = (baseIR * 0.275) - 908.73;
    }

    // Aplicando a redução do Imposto de Renda de 2026
    if (salario <= 5000) {
        irrf = Math.max(0, irrf - 312.89);
    }
    else if (salario <= 7350) {
        var reducao = 978.62 - (0.133145 * salario);
        irrf = Math.max(0, irrf - reducao);
    }

    // Calculando o salário líquido
    var salarioLiquido = salario - inss - irrf - outros;

    // Formatando os valores em reais
    var formato = {
        style: "currency",
        currency: "BRL"
    };

    // Mostrando o resultado na tela
    document.getElementById("resultado").innerHTML =
        "<hr>" +
        "Desconto INSS: " + inss.toLocaleString("pt-BR", formato) +
        "<br>Desconto IRRF: " + irrf.toLocaleString("pt-BR", formato) +
        "<br>Outros descontos: " + outros.toLocaleString("pt-BR", formato) +
        "<hr><strong>Salário Líquido: " +
        salarioLiquido.toLocaleString("pt-BR", formato) +
        "</strong>";

}
