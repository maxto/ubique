/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method painindex
 * @summary Pain Index
 * @description Mean value of the drawdowns, similar to Ulcer Index.
 *  
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array} 
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.painindex(x);
 * // 0.0023
 * 
 * ubique.painindex(cat(1,x,y));
 * // [ [ 0.0023, 0.042955 ] ]
 */
 $u.painindex = function(x,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  mode = mode || 'return';
  dim = dim || 1;

  var _painindex = function(a,mode) {
    dd = $u.drawdown(a,mode).dd,
    n = a.length;
    return $u.sum(dd) / n;
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return _painindex(x,mode);
  }
  return $u.vectorfun(x,function(val){return _painindex(val,mode);},dim);
}

}