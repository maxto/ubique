/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method sharpe
 * @summary Sharpe Ratio
 * @description Sharpe Ratio.Compute Sharpe ratio for an array X of values (daily, weekly, etc) and
 * a free-risk rate. Annual free-risk must be divided to match the right timeframe.
 * 
 * @param  {array|matrix} x array of value
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|arrray}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.sharpe(x,0.02/12);
 * // 0.698794
 * 
 * ubique.sharpe(ubique.cat(0,x,y));
 * // [ [ 0.770539 ], [ 0.23858 ] ]
 */
 $u.sharpe = function(x,frisk,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  frisk = frisk == null ? 0 : frisk;
  dim = dim == null ? 0 : dim;
 
 	var _sharpe = function(a,frisk) {
 		return ($u.mean(a) - frisk) / $u.std(a);
 	}
 	if ($u.isnumber(x)) {
 		return NaN;
 	}
 	return $u.vectorfun(dim,x,_sharpe,frisk);
 }

}