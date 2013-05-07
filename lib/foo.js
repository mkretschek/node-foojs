/**
 * @fileoverview Reune os diversos submodules que formam o foo module.
 *
 * @author Mathias Kretschek <mathias@kretschek.com.br>
 * @version 0.0.1
 */

/**
 * Reune diversos submodules de utilidades para trabalhar com primitives
 * ou para implementar classes e funções comuns em outras plataformas.
 * @module
 */
var foo = module.exports = {};

/** Utilidades para lidar com diferenças entre ambientes. */
foo.environmentize = require('./environmentize');


/** Utilidades para manipulação de strings. */
foo.string = require('./string');


/** Utilidades para manipulação de objetos. */
foo.object = require('./object');

