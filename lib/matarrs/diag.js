/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
 /**
 * @method diag
 * @summary Diagonal matrix and get diagonals of a matrix
 * @description  Diagonal matrix (for array) and get diagonals of a matrix (for matrix)
 * 
 * @param  {array|matrix} x array or matrix values
 * @param  {number} k k-th diagonal. 0: main diagonal, k > 0 above, k < 0 below (def: 0)
 * @return {array|matrix}   
 *
 * @example
 * // build diag matrix
 * ubique.diag([5,6,-3]);
 * // [ [ 5, 0, 0 ], [ 0, 6, 0 ], [ 0, 0, -3 ] ]
 * 
 * ubique.diag([5,6,-3],1);
 * // [ [ 0, 5, 0, 0 ],[ 0, 0, 6, 0 ],[ 0, 0, 0, -3 ],[ 0, 0, 0, 0 ] ]
 * 
 * ubique.diag([5,6,-3],-1);
 * // [ [ 0, 0, 0, 0 ],[ 5, 0, 0, 0 ],[ 0, 6, 0, 0 ],[ 0, 0, -3, 0 ] ]
 *
 * // get diag values from matrix
 * ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]]);
 * // [ 5, 6, -3 ]
 * 
 * ubique.diag([[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]],1);
 * // [ 5, 6, -3 ]
 * 
 * ubique.diag([[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]],-1);
 * // [ 5, 6, -3 ]
 * 
 * ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]],2);
 * // [0]
 */
 $u.diag = function(x,k) {
  if (arguments.length < 1) {
    throw new Error('not enough input arguments');
  }
  k = k == null ? 0 : k;
  var abs = Math.abs;
  if ($u.isarray(x)) {
    var n = x.length;
    var out = $u.zeros(n + abs(k),n + abs(k));
    for (var i = 0;i < n;i++) {
      if (k >= 0) {
       out[i][i + abs(k)] = x[i];
     }
     if (k < 0) {
       out[i + abs(k)][i] = x[i];
     }
   }
   return out;
 } else
 if ($u.ismatrix(x)) {
  var out = [];
  for (var i = 0;i < $u.nrows(x) - abs(k);i++) {
    if (k >= 0) {
      out.push(x[i][i + abs(k)]);
    }
    if (k < 0) {
      out.push(x[i + abs(k)][i]);
    }
  }
  return out;
} else {
  throw new Error('unknown input');
}
}

}