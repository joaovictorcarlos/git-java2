/**
 * Verifica se um número é par ou ímpar.
 * 
 * @param {number} numero - O número que ira ser verificado.
 * @returns {string} Retorna "Par" se o número for par, ou "Ímpar" se o número for ímpar.
 */
function parOuImpar(numero) {
    // Usa o operador (%) para verificar se o número é par ou ímpar
    // Se numero % 2 === 0 (se o número é par), retorna "Par"
    // Caso contrário, retorna "Ímpar"
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(10));  // Saída: Par
console.log(parOuImpar(15));  // Saída: Ímpar
console.log(parOuImpar(22));  // Saída: Par
