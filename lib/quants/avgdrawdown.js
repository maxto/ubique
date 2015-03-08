/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method avgdrawdown
 * @summary Average drawdown
 * @description Average drawdown. Only the three largest drawdowns selected.
 * 
 * @param  {array|matrix} x    asset/portfolio returns
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {object}      drawdown values (number) and recovery time (number)
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.avgdrawdown(x);
 * // 0.0115
 * ubique.avgdrawdown(ubique.cat(1,x,y));
 * // [ [ 0.0115, 0.0566 ] ]
 */
 $u.avgdrawdown = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var avgdd = function(a) {
    var cdd =  $u.cdrawdown(a);
    if (cdd.length >= 3) {
      var cdds = $u.sort(cdd,'descend');
      return (cdds[0] + cdds[1] + cdds[2])/3;
    } else {
      return $u.mean(cdd);
    }

  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return avgdd(x);
  }
  return $u.vectorfun(x,function(val){return avgdd(val);},dim);
}

}