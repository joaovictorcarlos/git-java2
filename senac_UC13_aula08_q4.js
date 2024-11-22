/**
 * Verifica se um usuário pode acessar o sistema com base em sua idade, se é administrador e se a conta não está bloqueada.
 *
 *
 * @param {Object} usuario - contem as propriedades `idade`, `isAdmin` e `isBlocked` do usuário.
 * @param {number} usuario.idade - A idade do usuário.
 * @param {boolean} usuario.isAdmin - Indica se o usuário é um administrador.
 * @param {boolean} usuario.isBlocked - Indica se a conta do usuário está bloqueada.
 * @returns {boolean} Retorna `true` se o acesso for permitido, ou `false` caso contrário.
 */
function podeAcessar({ idade, isAdmin, isBlocked }) {
    // Verificando se a pessoa pode acessar com base nas duas condições
    return (idade > 18 || isAdmin) && !isBlocked;
}


console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true })); // false
