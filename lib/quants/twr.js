/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method twr
 * @summary True Time-weighted return measures the returns of the assets irrespective of the amount invested
 * @description rue Time-weighted return measures the returns of the assets irrespective of the amount invested
 * 
 * @param  {array} mv array of market values
 * @param  {array} cf array of external cashflows (inflows/outflows)
 * @return {number}    
 *
 * @example
 * var mv = [250000,255000,257000,288000,293000,285000], cf = [0,0,25000,0,-10000,0];
 * 
 * ubique.twr(mv,cf);
 * // 0.07564769566198049
 */
 $u.twr = function(mv,cf) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    cf = 0;
  }
  if (mv.length !== cf.length) {
    throw new Error('market value and cash flows must be of the same size');
  }
  var _twr = [1];
  for (var i = 1; i < mv.length; i++) {
    _twr[i] = mv[i] / (mv[i - 1] + cf[i - 1]);
  }
  return $u.prod(_twr) - 1;
}

}