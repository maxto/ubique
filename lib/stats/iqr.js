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
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 *
 * ubique.iqr(x); // 0.023
 * ubique.iqr(z); // [[0.023, 0.095]]
 */
 $u.iqr = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	var _iqr = function(a) {
 		return $u.prctile(a,75) - $u.prctile(a,25);
 	}
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return _iqr(x);
 	}
 	return $u.vectorfun(x,function(val){return _iqr(val);},dim);
 }

}