/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method prctile
 * @summary Percentiles of a sample
 * @description Percentiles of a sample, inclusive
 * 
 * @param  {array|matrix} x array of emlements
 * @param  {number} p p-th percentile in the range [0,100]
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.prctile(x,5);
 * // -0.014
 * 
 * ubique.prctile(x,33);
 * // 0.0118
 * 
 * ubique.prctile(ubique.cat(0,x,y),5);
 * // [ [ -0.014, -0.061 ] ]
 */
 $u.prctile = function(x,p,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (p < 0 || p > 100) {
    throw new Error('p-th percentile must be a real value between 0 and 100 inclusive');
  }
  dim = dim == null ? 0 : dim;
  var _prctile = function(a,pr) {
    var arrnum= $u.colon(0.5,a.length - 0.5);
    var _a = $u.sort(a);
    var pq = $u.rdivide($u.times(arrnum,100),a.length);
    
    pq = pq.concat(0,pq,100);
    _a = _a.concat(_a[0],_a,_a[_a.length - 1]);
    return $u.interp1(pq,_a,pr);
  }
  if ($u.isnumber(x)) {
    return x;
  }
  return $u.vectorfun(dim,x,_prctile,p);
}

}