/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method times
 * @summary Array multiply X. * Y
 * @description  Element-by-element multiplication. X and Y must have the same dimensions unless ones is a number
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number|array|matrix} y number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * ubique.times(5,6);  // 30
 * ubique.times([5,6,4],[3,-1,0]); //  [15, -6, 0]
 * ubique.times([5,6,4],10); //  [50, 60, 40]
 * ubique.times(NaN,[5,6,4]);  // [NaN, NaN, NaN]
 *
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * ubique.times(a,b);  // [[-5, 18, -5], [28, 40, -9]]
 */
 $u.times = function(x,y) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		if ($u.isnumber(y)) {
 			return x * y;
 		}
 		if ($u.ismatrix(y)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(y);i++) {
 				var vec = $u.row(y,i);
 				v[i] = $u.arrayfun(vec,function(val){return x * val;});
 			}
 			return v;
 		}
 		return $u.arrayfun(y,function(val){return x * val;})
 	} else
 	if ($u.isnumber(y)) {
 		if ($u.ismatrix(x)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(x);i++) {
 				var vec = $u.row(x,i);
 				v[i] = $u.arrayfun(vec,function(val){return val * y;});
 			}
 			return v;
 		}
 		return $u.arrayfun(x,function(val){return val * y;})
 	} else
 	if ($u.isarray(x) && $u.isarray(y)) {
 		var v = [];
 		for (var i = 0;i < x.length;i++) {
 			v[i] = x[i] * y[i];
 		}
 		return v;
 	} else
 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
 		var v = [];
 		for (var i = 0;i < $u.nrows(x);i++) {
 			var vx = $u.row(x,i),
 			vy = $u.row(y,i);
 			v[i] = $u.times(vx,vy);
 		}
 		return v;
 	} else {
 		throw new Error('unknown input arguments');
 	}
 }

}