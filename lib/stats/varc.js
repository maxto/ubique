/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method varc
 * @summary Variance
 * @description  Variance
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.varc(c);
 * // 2.33333
 * ubique.varc(c,0);
 * // 1.55556 
 * ubique.varc(a,0);
 * // [[2, 2, 18]]
 * ubique.varc(a,0,0);
 * // [0.222222, 16.2222]
 */
 $u.varc = function(x,flag,dim) {
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
 	var _varc = function(a,flag) {
 		var mu = $u.mean(a);
 		return ($u.sum($u.power($u.abs($u.minus(a,mu)),2))) / (a.length - flag);
 	}
 	
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return  _varc(x,flag);
 	}
 	return $u.vectorfun(x,function(val){return _varc(val,flag);},dim);
 }

}
