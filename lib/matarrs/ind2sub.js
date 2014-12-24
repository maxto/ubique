/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method ind2sub
 * @summary Multiple subscripts from linear index
 * @description Multiple subscripts from linear index. Returns an array or matrix with 
 * the equivalent row and column of the corresponding index. 
 * 
 * @param  {array|matrix} size  size of array or matrix
 * @param  {number|array} index linear indexing [0...N-1]
 * @return {array|matrix}       
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * 
 * ubique.ind2sub(ubique.size(a),5); // [1, 2]
 * ubique.ind2sub(ubique.size(a),[0,1,2]); // [[0, 0], [1, 0], [0, 1]]
 * ubique.ind2sub(ubique.size([5,6,3]),2); // [2, 0]
 */
 $u.ind2sub = function(size,index) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  var _ind2sub = function(siz,idx) {
    var v = $u.rem(idx, siz[0]);
    return [v ,(idx - v) / siz[0]];
  }
  if ($u.isarray(index)) {
    var out = [];
    for (var i = 0;i < index.length;i++) {
      out.push(_ind2sub(size,index[i]));
    }
    return out;
  }
  return _ind2sub(size,index);
}

}