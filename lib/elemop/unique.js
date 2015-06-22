/**
 * Set Operations
 */
 module.exports = function($u) {
/**
 * @method unique
 * @summary Unique values in array or matrix
 * @description Unique values in array or matrix. Use mergsort to sort values, returns
 * a matrix with 2 array, the unique values and the unique indexes.
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {boolean} flag flag 0: export unique values, 1: export values and indexes(def: 0)
 * @return {array|matrix}
 *
 * @example
 * ubique.unique([9,-3,2,-12,0,1,0,1,2,3,4,5]);
 * // [ -3, -3, 0, 1, 2, 3, 4, 5, 9 ]
 *
 * ubique.unique([9,-3,2,-12,0,1,0,1,2,3,4,5],1);
 * // [ [ -3, -3, 0, 1, 2, 3, 4, 5, 9 ], [ 3, 1, 4, 5, 2, 9, 10, 11, 0 ] ]
 * 
 * ubique.unique([[5,4],[5,3],[6,3]]);
 * // [ 3, 4, 5, 6 ]
 *
 * ubique.unique([[5,4],[5,3],[6,3]],1);
 * // [ [ 3, 4, 5, 6 ], [ 3, 1, 0, 4 ] ]
 */
 $u.unique = function(x,flag) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  flag = flag == null ? 0 : flag;
  if ($u.ismatrix) {
    x = $u.flatten(x); // flatten by rows
  }
  var sorted = $u.mergesort(x);
  var uvalue = [sorted[0][1]];
  var uindex = [sorted[1][0]];

  for (var i = 1;i < sorted[0].length; i++) {
    if (sorted[0][i] !== sorted[0][i - 1]) {
      uvalue.push(sorted[0][i]);
      uindex.push(sorted[1][i]);
    }
  }
  if (flag === 0) {
    return uvalue;
  } else
  if (flag === 1) {
    return [uvalue,uindex];
  } else {
    throw new Error('flag can be only 0 (default) or 1');
  }
}
}
