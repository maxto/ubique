/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method range
 * @summary Range of values
 * @description Range of values
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.range(c); // 3
 * ubique.range(a,0); // [1,9]
 * ubique.range(a); // [[2, 2, 6]]
 */
 $u.range = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	var _range = function(a) {
 		return $u.max(a) - $u.min(a);
 	}
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return _range(x);
 	}
 	return $u.vectorfun(x,function(val){return _range(val);},dim);
 }

}