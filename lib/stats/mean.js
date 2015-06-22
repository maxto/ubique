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
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.mean(c);
 * // 4.66667
 * 
 * ubique.mean([[5,6,5],[7,8,-1]]);
 * // [ [ 5.333333 ], [ 4.666667 ] ]
 * 
 * ubique.mean([[5,6,5],[7,8,-1]],1);
 * // [ [ 6, 7, 2 ] ]
 */
 $u.mean = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  dim = dim == null ? 0 : dim;
 	if ($u.isnumber(x)) {
 		return x;
 	}
 	if ($u.isarray(x)) {
 		return  $u.sum(x,dim) / $u.numel(x);
 	}
 	return $u.rdivide($u.sum(x,dim),$u.size(x)[1 - dim]);
 }

}