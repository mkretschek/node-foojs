/**
 * @fileoverview Reune os diversos submodules que formam o foo module.
 *
 * @author Mathias Kretschek <mathias@kretschek.com.br>
 * @version 0.0.1
 */

/**
 * Reune diversos submodules de utilidades para trabalhar com primitives
 * ou para implementar classes e fun??es comuns em outras plataformas.
 * @module
 */
var e,
  typemap;


e = module.exports;


/**
 * Map for getting data types.
 * @enum {string}
 * @const
 */
typemap = {
  '[object Array]'    : 'array',
  '[object Boolean]'  : 'boolean',
  '[object Date]'     : 'date',
  '[object Error]'    : 'error',
  '[object Function]' : 'function',
  '[object Number]'   : 'number',
  '[object String]'   : 'string',
  '[object Object]'   : 'object',
  '[object RegExp]'   : 'regexp'
};


/**
 * Returns a normalized type for data types.
 * @param {*} obj Object for which we want to get the type.
 * @return {string} The type of the object.
 */
e.type = function (obj) {
  if (obj === null) {
    return String(obj);
  }
  return typemap[Object.prototype.toString.call(obj)] || 'object';
};


/** Utilities for string manipulation. */
e.string = require('./string');


/** Utilities for object manipulation. */
e.object = require('./object');

