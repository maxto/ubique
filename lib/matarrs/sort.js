/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method sort
 * @summary Sort array elements in ascending/descending order
 * @description Sort array elements in ascending/descending order. For matrix it is possibile to sort
 * along a dimension. Based on Merge Sort algorithm
 * 
 * @param   {array|matrix} x array of elements
 * @param   {string} mode sorting direction, 'ascend' (default) or 'descend'
 * @param   {number} dim dimension along which to sort, 0: rows, 1: colums (def: 1)
 * @return  {array}      
 *
 * @example
 * $u.sort([0,5,-1,3,-4,9,0],'ascend'); // [-4, -1, 0, 0, 3, 5, 9]
 * $u.sort([0,5,-1,3,-4,9,0],'descend'); // [9, 5, 3, 0, 0, -1, -4]
 * $u.sort([[-1,3,-1],[4,5,9]],'ascend'); // [ [ -1, 3, -1 ], [ 4, 5, 9 ] ]
 * $u.sort([[-1,3,-1],[4,5,9]],'descend'); // [ [ 4, 5, 9 ], [ -1, 3, -1 ] ]
 * $u.sort([[-1,3,-1],[4,5,9]],'descend',0); // [ [ 3, -1, -1 ], [ 9, 5, 4 ] ]
 */
 $u.sort = function(x,mode,dim) {
 	if ($u.isundefined(dim)) {dim = 1;}
 	if ($u.isundefined(mode)) {mode = 'ascend';}
 	
 	if ($u.ismatrix(x)) {
 		return $u.matrixfun(x,function(val) {return mergesort(val,mode);},dim)
 	}
 	return mergesort(x,mode);
 }

}