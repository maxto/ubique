/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method clone
 * @summary Create a clone of the input array or matrix
 * @description Create a clone of the input array or matrix
 * 
 * @param  {array|matrix} x array or matrix
 * @return {array|matrix}       
 *
 * @example
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * var d = [[[5]]];
 * 
 * ubique.clone(b); // [[-1,3,-1],[4,5,9]]
 * ubique.clone(c); // [5,6,3]
 * ubique.clone(d): // [[[5]]]
 */
 $u.clone = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		return x;
 	}
 	if ($u.isarray(x)) {
 		var out = new Array(x.length);
 		for (var i = 0; i < x.length; i++) {
 			out[i] = x[i];
 		}
 		return out;
 	}
 	if ($u.ismatrix(x)) {
 		var size = $u.size(x),
 		out = new Array(size[0]);
 		for (var i = 0;i < size[0];i++) {
 			out[i] = new Array(size[1]);
 			for (j = 0; j < size[1]; j++) {
 				out[i][j] = x[i][j];
 			}
 		}
 		return out;
 	}

 }
}