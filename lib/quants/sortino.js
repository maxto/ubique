/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method sortino
 * @summary Sortino ratio
 * @description  Sortino ratio
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} frisk free-risk rate (def: 0)
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|arrray}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.sortino(x,0.02/12);
 * // 3.0844
 * ubique.sortino(ubique.cat(1,x,y),0.01/12,0.5);
 * // [ [ 0.0354, 0.024 ] ]
 */
 $u.sortino = function(x,frisk,mar,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    frisk = 0;
    mar = 0;
    dim = 1;
  }
  if (arguments.length === 2) {
    mar = 0;
    dim = 1;
  }
  if (arguments.length === 3) {
    dim = 1;
  }
  var sr = function(a,frisk,mar) {
    return ($u.mean(a) - frisk) / $u.downsiderisk(a,mar);
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return sr(x,frisk,mar);
  } 
  return $u.vectorfun(x,function(val){return sr(val,frisk,mar);},dim);
}
}
