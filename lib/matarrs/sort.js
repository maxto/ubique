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
 * ubique.sort([0,5,-1,3,-4,9,0],'ascend');
 * // [ -4, -1, 0, 0, 3, 5, 9 ]
 *
 * ubique.sort([[-1,3,-1],[4,5,9]],'descend');
 * // [ [ 4, 5, 9 ], [ -1, 3, -1 ] ]
 * 
 * ubique.sort([[-1,3,-1],[4,5,9]],'descend',0);
 * // [ [ 3, -1, -1 ], [ 9, 5, 4 ] ]
 */
 $u.sort = function(x,mode,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
  mode = mode == null ? 'ascend' : mode;
  dim = dim == null ? 1 : dim;
  var _sort = function(a,mode) {
    var out = $u.mergesort(a,mode);
    return out[0];
  }
  if ($u.isnumber(x)) {
    return x;
  }
  if ($u.isarray(x)) {
   return _sort(x,mode);
 }
 return $u.vectorfun(dim,x,_sort,mode);
}

}