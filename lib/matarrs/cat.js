/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method cat
 * @summary Concatenate arrays and matrices
 * @description Concatenate arrays and matrices along specified dimension as first argument
 *              
 * @param  {number|array|matrix...} args variable arguments: first must be a number for dimension (0:rows, 1:columns)
 * @return {array|matrix}     
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * var d = [0.5,-3,2.3];
 * var f = [[3, 2], [5, 2]];
 *
 * // Row concat
 * ubique.cat(0,a,b); // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
 * ubique.cat(0,a,b,b); // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
 * ubique.cat(0,c,d); // [5, 6, 3, 0.5, -3, 2.3]
 * ubique.cat(0,[1],[2]); // [1, 2]
 * ubique.cat(0,5,7,9,8); // [5,7,9,8]
 * ubique.cat(0,5,7,c); // [5, 7, 5, 6, 3]
 *
 * // Column concat
 * ubique.cat(1,a,b); // [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
 * ubique.cat(1,a,b,f); // [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
 * ubique.cat(1,a,[2,3]); // [[5, 6, 5, 2], [7, 8, -1, 3]]
 * ubique.cat(1,5,6,7); // [[5, 6, 7]]
 */
 $u.cat = function() {
 	var _args = arguments,
 	nargs = arguments.length;
 	if (nargs === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (nargs === 1) {
 		return [];
 	}
 	if (nargs > 1) {
 		var dim = _args[0];
 		if (dim !== 0 && dim !== 1) {
 			throw new Error('dimension must be 0 (rows) or 1 (columns)');
 		}
 		if (dim === 0) {
 			for (var i = 1;i < nargs - 1;i++) {
 				var tmp = _args[i + 1];
 				if ($u.isnumber(_args[1])) {
 					if (i === 1) {
 						var out = [_args[1]];
 					}
 					if ($u.isnumber(tmp) || $u.isarray(tmp)) {
 						out = out.concat(tmp);
 					} else {
 						throw new Error('concatenation dimension mismatch');
 					}
 				} else 
 				if ($u.isarray(_args[1])) {
 					if (i === 1) {
 						var out = _args[1];
 					}
 					if ($u.isnumber(tmp) || $u.isarray(tmp)) {
 						out = out.concat(tmp);
 					} else {
 						throw new Error('concatenation dimension mismatch');
 					}
 				} else 
 				if ($u.ismatrix(_args[1])) {
 					if (i === 1) {
 						var out = _args[1];
 					}
 					if ($u.ismatrix(tmp)) {
 						if (i > 1 && ($u.ncols(tmp) !== $u.ncols(out))) {
 							throw new Error('concatenation dimension mismatch');
 						}
 						out = out.concat(tmp);
 					} else {
 						throw new Error('concatenation dimension mismatch');
 					}
 				} else {
 					throw new Error('unknown input arguments');
 				}
 			}
 			return out;
 		}
 		if (dim === 1) {
 			var out = [];
 			for (var i = 0;i < nargs - 1;i++) {
 				var tmp = _args[i + 1];
 				if ($u.isnumber(tmp)) {
 					tmp = [[tmp]];
 				}
 				if ($u.isarray(tmp)) {
 					tmp = $u.tomat(tmp);
 				}
 				if (i > 0 && ($u.nrows(tmp) !== $u.nrows(out))) {
 					throw new Error('concatenation dimension mismatch');
 				}
 				if (i === 0) {
 					out = $u.clone(tmp);
 				} else {
 					for (var j = 0;j < $u.nrows(out);j++) {
 						var row = out[j];
 						row = row.concat(tmp[j]);
 						out[j] = row;
 					}
 				}
 			}
 			return out;
 		}
 	}
 }

}