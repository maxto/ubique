/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method mtimes
 * @summary Matrix multiplication X * Y
 * @description  Matrix multiplication X * Y. If X is MxP and Y is PxN, returns a matrix MxN
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number|array|matrix} y number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * 
 * ubique.mtimes(5,6); // 30
 * ubique.mtimes(c,3); // [15, 18, 9]
 * ubique.mtimes(a,3); // [[15, 18, 15], [21, 24, -3]]
 * ubique.mtimes(c,[[3,4,5]]); // [[15, 20, 25], [18, 24, 30], [9, 12, 15]]
 * ubique.mtimes(a,c); // [[76], [80]]
 */
 $u.mtimes = function(x,y) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (!$u.isnumber(x) && !$u.isnumber(y)) {
 		var xsize = $u.size(x),
 		ysize = $u.size(y);
 		if (xsize[1] !== ysize[0]) {
 			throw new Error('inner dimension mismatch');
 		}
 		var out = $u.matrix(xsize[0],ysize[1]);
 		for (var i = 0;i < xsize[0];i++) {
 			var xx = $u.row(x,i);
 			for (var j = 0;j < ysize[1];j++) {
 				var yy = $u.col(y,j);
 				out[i][j] = $u.squeeze($u.dot(xx,yy));
 			}
 		}
 		return out;
 	}
 	return $u.times(x,y);
 }
}
