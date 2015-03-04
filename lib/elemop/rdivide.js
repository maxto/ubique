/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method rdivide
 * @summary Right array division X. / Y
 * @description Divides each element of X by the corresponding element of Y. Inputs X and Y
 * must have the same size
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number|array|matrix} y number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [-1,-2,-3];
 * var e = [[9, 5], [6, 1]];
 * var f = [[3, 2], [5, 2]];
 * 
 * ubique.rdivide(5,6);
 * // 0.833333
 * ubique.rdivide(a,3);
 * // [[1.66667, 2, 1.66667], [2.33333, 2.66667, -0.333333]]
 * ubique.rdivide(3,[-1,-2,-3]);
 * // [-3, -1.5, -1]
 * ubique.rdivide([5,6,7],[-1,-2,-3]);
 * // [-5, -3, -2.33333]
 * ubique.rdivide(e,f);
 * // [[3, 2.5], [1.2, 0.5]]
 * ubique.rdivide(e,3);
 * // [[3, 1.66667], [2, 0.333333]]
 */
 $u.rdivide = function(x,y) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		if ($u.isnumber(y)) {
 			return x / y;
 		}
 		if ($u.ismatrix(y)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(y);i++) {
 				var vec = $u.row(y,i);
 				v[i] = $u.arrayfun(vec,function(val){return x / val;});
 			}
 			return v;
 		}
 		return $u.arrayfun(y,function(val){return x / val;})
 	}
 	if ($u.isnumber(y)) {
 		if ($u.ismatrix(x)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(x);i++) {
 				var vec = $u.row(x,i);
 				v[i] = $u.arrayfun(vec,function(val){return val / y;});
 			}
 			return v;
 		}
 		return $u.arrayfun(x,function(val){return val / y;})
 	}
 	if ($u.isarray(x) && $u.isarray(y)) {
 		var v = [];
 		for (var i = 0;i < x.length;i++) {
 			v[i] = x[i] / y[i];
 		}
 		return v;
 	}
 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
 		var v = [];
 		for (var i = 0;i < $u.nrows(x);i++) {
 			var vx = $u.row(x,i),
 			vy = $u.row(y,i);
 			v[i] = $u.rdivide(vx,vy);
 		}
 		return v;
 	}
 }
}