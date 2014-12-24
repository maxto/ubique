/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
  /**
   * @method  substelin
   * @summary Subset of array or matrix based on linear indexing
   * @description Subset dof array or matrix based on linear indexing
   *              
   * @param  {array|matrix} m   array or matrix of elements 
   * @param  {numer|array|matrix} idx linear indexing
   * @return {numner|array|matrix}     
   *
   * @example
   * var a = [[5,6,5],[7,8,-1]];
   * var c = [5,6,3];
   *
   * ubique.subsetlin(a,1); // [7]
   * ubique.subsetlin(a,[0,1,2,3]); // [5, 7, 6, 8]
   * ubique.subsetlin(a,[[0,1,2],[2,3,4]]); // [[5, 7, 6], [6, 8, 5]]
   * ubique.subsetlin(c,[0,1]); // [5, 6]
   * ubique.subsetlin(c,[[0,1],[1,2]]); // [[5, 6], [6, 3]]
   */
   $u.subsetlin = function(m,idx) {
    if (arguments.length === 0) {
      throw new Error('not enough input arguments');
    } else 
    if (arguments.length === 1 || $u.isnumber(m)) {
      return m;
    } else 
    if (arguments.length === 2) {
      if ($u.isnumber(idx)) {
        idx = [idx];
      }
      var _m = $u.flatten(m);
      var coo1 = $u.ind2sub($u.size(m),idx);
      return $u.squeeze($u.arrayfun(idx,function(val){return _m[val]}));
    } else {
      throw new Error('too many input arguments');
    }
  }

}