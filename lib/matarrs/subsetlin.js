/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
  /**
   * @method  substelin
   * @summary Subset of array or matrix based on linear indexing
   * @description Subset of array or matrix based on linear indexing by rows (default)
   *              
   * @param  {array|matrix} m   array or matrix of elements 
   * @param  {numer|array|matrix} idx linear indexing
   * @param  {number} flag flag 0: rowwise element, 1: columnwise (def: 0)
   * @return {numner|array|matrix}     
   *
   * @example
   * var a = [[5,6,5],[7,8,-1]];
   * var c = [5,6,3];
   *
   * ubique.subsetlin(a,1);
   * // [ 6 ]
   *
   * // subset by rows
   * ubique.subsetlin(a,[0,1,2,3]);
   * // [ 5, 6, 5, 7 ]
   *
   * // subset by columns
   * ubique.subsetlin(a,[0,1,2,3],1);
   * // [ 5, 7, 6, 8 ]
   * 
   * ubique.subsetlin(a,[[0,1,2],[2,3,4]],1);
   *  // [ [ 5, 7, 6 ], [ 6, 8, 5 ] ]
   *  
   * ubique.subsetlin(c,[0,1]);
   * // [ 5, 6 ]
   * 
   * ubique.subsetlin(c,[[0,1],[1,2]]);
   * // [ [ 5, 6 ], [ 6, 3 ] ]
   */
   $u.subsetlin = function(m,idx,flag) {
    if (arguments.length === 0) {
      throw new Error('not enough input arguments');
    }
    if (arguments.length === 1 || $u.isnumber(m)) {
      return m;
    } 
    flag = flag == null ? 0 : flag;
    if ($u.isnumber(idx)) {
      idx = [idx];
    }
    var _m = $u.flatten(m,flag);
    return $u.squeeze($u.arrayfun(idx,function(val){return _m[val]}));
  }
}