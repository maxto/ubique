/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method quantile
 * @summary Quantilies of a sample 
 * @description Quantilies of a sample 
 * 
 * @param  {array|matrix} x array or matrix of elements
 * @param  {number} p p-th quantile in the range [0,1]
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.quantile(x,0.25);
 * // 0.003
 * 
 * ubique.quantile(ubique.cat(0,x,y),0.33);
 * // [ [ 0.0118, -0.0242 ] ]
 */
 $u.quantile = function(x,p,dim) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
 	if (p < 0 || p > 1) {
 		throw new Error('p-th percentile must be a real value between 0 and 1 inclusive');
 	}
 	dim = dim == null ? 0 : dim;
 	return $u.prctile(x,p*100,dim);
 }

}