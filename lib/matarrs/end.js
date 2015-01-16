/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method end
 * @summary Last index in array or matrix
 * @description Last index in array or matrix. Indexing is in the range [0...N-1]
 *  
 * @param  {array|matrix} x values
 * @param  {number} dim	(only for matrix) -1: rows and columns, 0: rows, 1: column (def: -1)
 * @return {number|array}   
 * 
 * @example
 * ubique.end([5,6,3]); // 2
 * ubique.end([[4,5,0],[-1,2,-3]]); // [1, 2]
 * ubique.end([[4,5,0],[-1,2,-3]],0); // 1
 */
 $u.end = function(x,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		dim = -1;
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	} else 
 	if ($u.isarray(x)) {
 		return x.length - 1;
 	} else
 	if ($u.ismatrix(x)) {
 		if (!$u.isinteger(dim) || (dim < -1 || dim > 1)) {
 			throw new Error('dimension must be -1,0,1');
 		}
 		var idx = [$u.nrows(x) - 1,$u.ncols(x) - 1];
 		if (dim === -1) {
 			return idx;
 		} else {
 			return idx[dim];
 		}
 	} else 
 	throw new Error('unkown input arguments'); 	
 }

}

