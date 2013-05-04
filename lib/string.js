var _ = require('underscore');


var string = module.exports = {}
  , placeholder = /\{([a-zA-Z0-9_\-]+)\}/g;


/**
 * Formata uma string com os dados fornecidos.
 *
 * @param {string} str
 * @param {object} data Objeto com key-values a serem substituidos em str.
 * @returns {string} String formatada.
 */
string.format = function (str, data) {
  return data ?
      str.replace(placeholder, function (match, p1) {
        var v = data[p1];
        return v !== undefined ? v : match;
      }) :
      str;
};


/**
 * Verifica se uma string começa com determinado valor.
 * @param {string} str String cujo início será verificado.
 * @param {string} val Valor a ser procurado no início da str.
 * @param {boolean=} caseSensitive Indica se a verificação deve diferenciar
 *  maiúsculas e minúsculas.
 * @returns {boolean} True se str começar com val.
 */
string.startsWith = function(str, val, caseSensitive) {
  var v = caseSensitive ? val : val.toLowerCase()
    , s = caseSensitive ? str : str.toLowerCase();
  return v === s.slice(0, v.length);
};


/**
 * Verifica se uma string termina com determinado valor.
 * @param {string} str String cujo final será verificado.
 * @param {string} val Valor a ser procurado no final da str.
 * @param {boolean=} caseSensitive Indica se a verificação deve diferenciar
 *  maiúsculas e minúsculas.
 * @returns {boolean} True se str terminar com val.
 */
string.endsWith = function(str, val, caseSensitive) {
  var v = caseSensitive ? val : val.toLowerCase()
    , s = caseSensitive ? str : str.toLowerCase();
  return v === s.slice(-(v.length));
};
