/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method zscore
 * @summary Standardized Z score
 * @description Standardized Z score
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
 * ubique.zscore(c); // [0.218218, 0.872872, -1.09109]
 * ubique.zscore(c,0); // [0.267261, 1.06904, -1.33631]
 * ubique.zscore(a,0); // [[-1, -1, 1], [1, 1, -1]]
 * ubique.zscore(a,0,0); // [[-0.707107, 1.41421, -0.707107], [0.579324, 0.827606, -1.40693]]
 */
 $u.zscore = function(x,flag,dim) {
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
 	var _zscore = function(a,flag) {
 		return $u.rdivide($u.minus(a,$u.mean(a)),$u.std(a,flag));
 	}
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return  _zscore(x,flag);
 	}
 	return $u.vectorfun(x,function(val){return _zscore(val,flag);},dim);
 }

}