/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method flipdim
 * @summary Flip order of elements in array or matrix
 * @description Flip order of elements in array or matrix
 * 
 * @param  {array|matrix} x  array or matrix of elements
 * @param  {number} dim dimension to apply reverse ordering 0: rows, 1: column (def: 0)
 * @return {array|matrix}     
 * 
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 * 
 * ubique.flipdim(c); // [3, 6, 5]
 * ubique.flipdim(c,1); // [5, 6, 3]
 * ubique.flipdim(a); // [[7, 8, -1], [5, 6, 5]]
 * ubique.flipdim(a,1); // [[5, 6, 5], [-1, 8, 7]]
 */
 $u.flipdim = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  if ($u.isnumber(x)) {
    return x;
  } else 
  if ($u.isarray(x)) {
    if (dim === 1) {
      return x
    } else {
      return x.reverse();
    }
  } else 
  if ($u.ismatrix(x)) {
    return $u.vectorfun(x,function(val){return val.reverse();},1 - dim);
  } else {
    throw new Error('unknown input arguments');
  }

}
}