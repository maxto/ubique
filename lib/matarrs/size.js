/**
 * Array Dimensions
 */
 module.exports = function($u) {
/**
 * @method size
 * @summary Size of N-D array
 * @description Size of N-D array. N-D array is equal to MxN matrix, 
 * 1-D Array is equal to Mx1 vector, Number is equal to 1x1 array
 * 
 * @param  {number|array|matrix} x array of elements
 * @return {array}  
 *
 * @example
 * ubique.size([[[[5,6,5],[7,8,-1]]]]); // [1, 1, 2, 3]
 * ubique.size([[3,2,7],[4,5,6]]); //  [2, 3]
 * ubique.size([5,4,4]); // [3, 1]
 * ubique.size(5); // [1, 1]
 */
 $u.size = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnull(x) || $u.isundefined(x)) {
 		throw new Error('unknown input type');
 	}
 	if ($u.isnumber(x)) {
 		return [1, 1];
 	}
 	if ($u.isarray(x)) {
 		return [x.length,1];
 	}
 	var siz = x.length,
 	_siz = [];
 	while (!$u.isundefined(siz)) {
 		_siz.push(siz);
 		x = x[0];
 		siz = x.length;
 	} 
 	return _siz;
 }

}