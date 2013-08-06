
var type = require('./foo').type,
  e;

e = module.exports;


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
e.dig = function(obj, key) {
  var keys = Array.isArray(key) ? key : key.split('.');
  var val = obj || {};
  while (keys.length) {
    val = val[keys.shift()];
    if (val === undefined) break;
  }
  return val;
}


/**
 * Checks if `obj` is a plain object, created by `{}` or
 * constructed with `new Object`. This function was taken from jQuery
 * and slightly adjusted. This version is NOT recommended for for use
 * in the browser, as we've removed some logic regarding Firefox < 20
 * support and a check for the `window` object.
 * @see http://bit.ly/17vVrOz
 * @param {*} obj object to be checked.
 * @return {boolean} `true` if the object was created by {} or 
 *  constructed with `new Object`.
 */
e.isPlainObject = function (obj) {
  if (type(obj) !== 'object' || obj.nodeType) { return false; }

  var oProto = Object.prototype,
    cProto = obj.constructor.prototype;
  if (obj.constructor && 
      !oProto.hasOwnProperty.call(cProto, 'isPrototypeOf')) {
    return false;
  }

  return true;
};
