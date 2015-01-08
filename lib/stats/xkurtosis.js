/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method xkurtosis
 * @summary Excess kurtosis
 * @description Excess kurtosis
 * 
 * @param  {array|matrix} x  array or matrix of elements
 * @param  {number} flag     0: bias correction, 1: simple (def: 1)
 * @param  {number} dim      dimension 0: row, 1: column (def: 1)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 * 
 * ubique.xkurtosis(x); // 0.0375811
 * ubique.xkurtosis(x,0); // 1.03072
 * ubique.xkurtosis(z); // [[0.0375811, -1.60236]]
 */
 $u.xkurtosis = function(x,flag,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		flag = 1;
 		dim = 1;
 	}
 	if (arguments.length === 2) {
 		dim = 1;
 	}
 	var kurt = $u.kurtosis(x,flag,dim);
 	if ($u.isnumber(kurt)) {
 		return kurt - 3;
 	}
 	return $u.arrayfun(kurt,function(a) {return a - 3;});
 }

}