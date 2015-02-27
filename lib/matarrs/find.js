/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method find
 * @summary Find indices of nonzero elements
 * @description Find indices of nonzero elements
 *
 * @param  {array|matrix} x values
 * @return {array|matrix}   
 *
 * @example
 * ubique.find([0.3,-0.4,0.5,0.9].map(function(a){return a > 0}));
 * // [ 0, 2, 3 ]
 * ubique.find([[true,true],[false,true]]);
 * // [ 0, 2, 3 ]
 */
 $u.find = function(x) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.ismatrix(x)) {
    x = $u.flatten(x);
  }
  var dummy = $u.colon(0,x.length);
  return dummy.filter(function(el) {
    return x[el] === true;
  })
}
}