/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method std
 * @summary Standard deviation
 * @description  Standard deviation
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
 * ubique.std(c); // 1.52753
 * ubique.std(c,0); // 1.24722 
 * ubique.std(a,0); // [[1, 1, 3]]
 * ubique.std(a,0,0); // [0.471405, 4.02768]
 */
 $u.std = function(x,flag,dim) {
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
 	var variance = $u.variance(x,flag,dim);
 	return $u.sqrt(variance);
 }

}
