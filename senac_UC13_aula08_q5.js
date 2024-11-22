/**
 * Calcula o preço de um produto após aplicar um desconto percentual.
 *
 * @param {number} precoOriginal - O preço original do produto.
 * @param {number} desconto - A porcentagem de desconto a ser aplicada no produto.
 * @returns {number} O preço do produto após o desconto ser aplicado.
 */
const calcularDesconto = (precoOriginal, desconto) => precoOriginal - (precoOriginal * desconto / 100);


console.log(calcularDesconto(100, 10)); // Saída: 90
console.log(calcularDesconto(250, 20)); // Saída: 200
