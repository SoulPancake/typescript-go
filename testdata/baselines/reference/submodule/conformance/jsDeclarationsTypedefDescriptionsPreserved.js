//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsTypedefDescriptionsPreserved.ts] ////

//// [index.js]
/**
 * Options for Foo <------------
 * @typedef {Object} FooOptions
 * @property {boolean} bar - Marvin K Mooney
 * @property {string} baz - Sylvester McMonkey McBean
 */

/**
 * Multiline
 * Options
 * for Foo <------------
 * @typedef {Object} BarOptions
 * @property {boolean} bar - Marvin K Mooney
 * @property {string} baz - Sylvester McMonkey McBean
 */


//// [index.js]
/**
 * Options for Foo <------------
 * @typedef {Object} FooOptions
 * @property {boolean} bar - Marvin K Mooney
 * @property {string} baz - Sylvester McMonkey McBean
 */
/**
 * Multiline
 * Options
 * for Foo <------------
 * @typedef {Object} BarOptions
 * @property {boolean} bar - Marvin K Mooney
 * @property {string} baz - Sylvester McMonkey McBean
 */


//// [index.d.ts]
/**
 * Options for Foo <------------
 * @typedef {Object} FooOptions
 * @property {boolean} bar - Marvin K Mooney
 * @property {string} baz - Sylvester McMonkey McBean
 */
/**
 * Multiline
 * Options
 * for Foo <------------
 * @typedef {Object} BarOptions
 * @property {boolean} bar - Marvin K Mooney
 * @property {string} baz - Sylvester McMonkey McBean
 */
