/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method iqr
 * @summary Interquartile range
 * @description Return the interquartile (Q3 - Q1 quartiles)
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 *
 * ubique.iqr(x);
 * // 0.023
 * 
 * ubique.iqr(ubique.cat(0,x,y));
 * // [ [ 0.023 ], [ 0.095 ] ]
 */
 $u.iqr = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	dim  = dim == null ? 0 : dim;

 	var _iqr = function(a) {
 		return $u.prctile(a,75) - $u.prctile(a,25);
 	}
 	if ($u.isnumber(x)) {
 		return NaN;
 	}
 	return $u.vectorfun(dim,x,_iqr);
 }

}