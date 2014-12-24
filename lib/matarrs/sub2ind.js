/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method sub2ind
 * @summary Subscripts to linear indices
 * @description Subscripts to linear indices. Convert a 2D coordinates [X,Y] of a matrix into linear indices
 * 
 * @param  {array|matrix} size  size of array or matrix
 * @param  {array|matrix} index X,Y coordinates for 2D matrices in the range [0...N-1]
 * @return {number|array}       
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * 
 * ubique.sub2ind(ubique.size(a),[1, 2]); // 5
 * ubique.sub2ind(ubique.size(a),[[0, 0], [1, 0], [0, 1]]); // [0, 1, 2]
 * ubique.sub2ind(ubique.size([5,6,3]),[2, 0]); // 2
 */
 $u.sub2ind = function(size,index) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isarray(index)) {
 		index = [index];
 	}
 	var x = $u.col(index,0),
 	y = $u.col(index,1);
 	var v = [];
 	for (var i = 0;i < x.length;i++) {
 		v[i] = (x[i]) + (y[i]) * size[0];
 	}
 	if ($u.numel(v) === 1) {
 		return $u.squeeze(v)[0];
 	}  else {
 		return $u.squeeze(v);
 	}
 }
}
