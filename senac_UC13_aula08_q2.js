/**
 * Recebe um número e imprime o nome do dia da semana.
 * Se o número for inválido, imprime "Número inválido".
 *
 * @param {number} numero - O número correspondente ao dia da semana (1 para Domingo, 2 para Segunda-feira, etc.).
 * @returns {void} Não retorna nada, apenas imprime o nome do dia ou uma mensagem de erro no console.
 */
function definirDiaDaSemana(numero) {
    switch (numero) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Número inválido");
    }
}


definirDiaDaSemana(3); // Saída: Terça-feira
definirDiaDaSemana(7); // Saída: Sábado
definirDiaDaSemana(8); // Saída: numero invalido
