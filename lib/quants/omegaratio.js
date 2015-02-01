/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method omegaratio
 * @summary omegaratio ratio
 * @description omegaratio ratio
 * 
 * @param  {array|matrix} x     asset/portfolio returns
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 *
 * ubique.omegaratio(x); // 8.7826
 * ubique.omegaratio(z); // [ [ 8.7826, 1.7283 ] ]
 */
 $u.omegaratio = function(x,mar,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    mar = 0;
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var or = function(a,mar) {
    return $u.upsidepot(a,mar) / $u.downsidepot(a,mar);
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return or(x,mar);
  } 
  return $u.vectorfun(x,function(val){return or(val,mar);},dim);
}
}
