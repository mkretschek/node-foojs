
var object = module.exports = {};


// TODO(mkretschek): Alterar a verificação em `key`: Ao invés de verificar se
// é um Array, deveria verificar se é uma String e então utilizar `split()`.
/**
 * Retorna o valor de uma key de um objeto, mas permite passar nested-keys como
 * uma string, um equivalente à obj['address.street'];
 *
 * @param {object} obj Objeto no qual começar a procura pela key
 * @param {string|Array} key Key desejada. Pode ser no formato 'key.sub' para
 *  acessar atributos de sub-objetos.
 * 
 * @returns {*} Retorna o valor da chave ou undefined se ela nao existir.
 */
object.dig = function(obj, key) {
  var keys = Array.isArray(key) ? key : key.split('.');
  var val = obj || {};
  while (keys.length) {
    val = val[keys.shift()];
    if (val === undefined) break;
  }
  return val;
}
