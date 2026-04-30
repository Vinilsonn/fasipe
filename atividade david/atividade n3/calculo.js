function calcular() {

    // PEGAR VALORES
    let atv1 = parseFloat(document.getElementById("atv1").value);
    let prova1 = parseFloat(document.getElementById("prova1").value);
    let prova2 = parseFloat(document.getElementById("prova2").value);
    let atv3 = parseFloat(document.getElementById("atv3").value);
    let prova3 = parseFloat(document.getElementById("prova3").value);

    // VALIDAÇÃO
    if (
        isNaN(atv1) || atv1 < 0 || atv1 > 10 ||
        isNaN(prova1) || prova1 < 0 || prova1 > 10 ||
        isNaN(prova2) || prova2 < 0 || prova2 > 10 ||v
    // RESULTADO
    let resultado = document.getElementById("resultado");

    if (media >= 7) {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Aprovado`;
        resultado.className = "aprovado";
    } else {
        resultado.innerHTML = `Média: ${media.toFixed(2)} - Reprovado`;
        resultado.className = "reprovado";
    }
}