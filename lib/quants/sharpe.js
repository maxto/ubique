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
 * @param  {array|matrix} x     array of value
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|arrray}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 *
 * ubique.sharpe(x,0.02/12); // 0.698794
 * ubique.sharpe(z); // [[0.770539, 0.23858]]
 */
 $u.sharpe = function(x,frisk,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		frisk = 0;
 		dim = 1;
 	}
 	if (arguments.length === 2) {
 		dim = 1;
 	}
 	var _sharpe = function(a,frisk) {
 		return ($u.mean(a) - frisk) / $u.std(a);
 	}
 	if ($u.isnumber(x)) {
 		throw new Error('input must be an array or matrix');
 	}
 	if ($u.isarray(x)) {
 		return  _sharpe(x,frisk);
 	}
 	return $u.vectorfun(x,function(val){return _sharpe(val,frisk);},dim);
 }

}