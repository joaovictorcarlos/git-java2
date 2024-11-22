/**
 * Verifica se a idade de uma pessoa é maior ou menor de 18 anos.
 *
 * @param {number} idade - A idade da pessoa que ser verificada.
 * @returns {string} Retorna "Menor de idade" se a idade for menor que 18, ou "Maior de idade" se for 18 ou mais.
 */
function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    } else {
        return "Maior de idade";
    }
}


console.log(verificarIdade(15));  // Saída: Menor de idade
console.log(verificarIdade(18));  // Saída: Maior de idade
console.log(verificarIdade(21));  // Saída: Maior de idade
