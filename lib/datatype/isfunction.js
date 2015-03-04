/**
 * Data Type Identification
 */
 module.exports = function($u) {
/**
* @method isfunction
* @summary True for function
* @description true for function
* 
* @param  {function} x function
* @return {Boolean}   
*
* @example
* ubique.isfunction(function(a){return console.log(a);});
* // true
* ubique.isfunction(Math.log);
* // true
*/
$u.isfunction = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  return typeof x === 'function';
}

}