 /**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method mean
 * @summary Average value of array
 * @description Average value of array
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.mean(c); // 4.66667
 * ubique.mean(a,0); // [5.33333, 4.66667]
 * ubique.mean(a); // [6, 7, 2]
 */
 $u.mean = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = 1;
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	}
 	if ($u.isarray(x)) {
 		return  $u.sum(x,dim) / $u.numel(x);
 	}
 	return $u.rdivide($u.sum(x,dim),$u.size(x)[1 - dim]);
 }

}