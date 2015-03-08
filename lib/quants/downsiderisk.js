/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method downsiderisk
 * @summary Downside Risk
 * @description Downside Risk or Semi-Standard Deviation. 
 * Measures  the  variability  of  underperformance  below  a  minimum  target   rate 
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} mar minimum acceptable return (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.downsiderisk(x,0.1/100);
 * // 0.00570088
 * ubique.downsiderisk(ubique.cat(1,x,y));
 * // [[0.00526308, 0.0282082]]
 */
 $u.downsiderisk = function(x,mar,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		mar = 0;
 		dim = 1;
 	}
 	if (arguments.length === 2) {
 		dim = 1;
 	}
 	var _dsrisk = function(a,mar) {
 		var z = 0;
 		for (var i = 0; i < a.length; i++) {
 			z += Math.pow(Math.min(a[i] - mar,0),2) / a.length;
 		}
 		return Math.sqrt(z);
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	}
 	if ($u.isarray(x)) {
 		return _dsrisk(x,mar);
 	} 
 	return $u.vectorfun(x,function(val){return _dsrisk(val,mar);},dim);
 }
}
