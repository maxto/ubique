/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method flip
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
 * ubique.flip(c); // [3, 6, 5]
 * ubique.flip(c,0); // [5, 6, 3]
 * ubique.flip(a); // [[7, 8, -1], [5, 6, 5]]
 * ubique.flip(a,0); // [[5, 6, 5], [-1, 8, 7]]
 */
 $u.flip = function(x,dim) {
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
      return x.reverse();
    } else {
      return x;
    }
  } else 
  if ($u.ismatrix(x)) {
    return $u.vectorfun(x,function(val){return val.reverse();},dim);
  } else {
    throw new Error('unknown input arguments');
  }

}
}