/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method cdrawdown
 * @summary Continuous Drawdown
 * @description Continuous Drawdown
 *  
 * @param  {array|matrix} x asset/portfolio values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {array|matrix}
 * 
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.cdrawdown(x);
 * // [ 0.009, 0.014 ]
 * ubique.cdrawdown(ubique.cat(1,x,y));
 * // [ [ 0.009, 0.005 ], [ 0.014, 0.0957 ] ]
 */
 $u.cdrawdown = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var cdown = function(a) {
    var cdd = [], tmp = 0, t = 0;
    for (var i = 0; i < a.length; i++) {
      if (i === 0 && a[i] < 0) {
        tmp = 1 + a[i];
      }
      if (i > 0) {
        if (a[i] < 0) {
          if (tmp === 0) {
            tmp = 1 + a[i];
          } else {
            tmp = tmp * (1 + a[i]);
          }
        }
        if (a[i] >=0 ) {
          if (tmp !== 0) {
            cdd[t] = 1 - tmp;
            t++;
            tmp = 0;
          }
        }
      }
    }
    return cdd;
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return cdown(x);
  }
  return $u.vectorfun(x,function(val){return cdown(val);},dim);
}

}