/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method ulcerindex
 * @summary Ulcer Index
 * @description Ulcer Index of Peter G. Martin (1987). The impact of long, deep drawdowns will have significant
 * impact because the underperformance since the last peak is squared.
 *  
 * @param  {array|matrix} x asset/portfolio matrix of equity time series with the oldest value in x[0] and the last one in x[N-1]
 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array} 
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * 
 * ubique.ulcerindex(x);
 * // 0.6344798231002222
 * ubique.ulcerindex([[0.003,0.026],[0.015,-0.009],[0.014,0.024],[0.015,0.066],[-0.014,0.039]],'return');
 * // [ [ 0.8651268372004445, 0.6301432708803503 ] ]
 */
 $u.ulcerindex = function(x,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    mode = 'return';
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var uidx = function(a,mode) {
    var dd = $u.drawdown(a,mode).dd,
    n = a.length;
    return $u.sqrt($u.sum($u.power(dd,2)) / n);
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return uidx(x,mode);
  }
  return $u.vectorfun(x,function(val){return uidx(val,mode);},dim);
}

}