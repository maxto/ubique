/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method minus
 * @summary Subtraction X - Y
 * @description Subtraction X - Y. X and Y must have the same dimension unless one is a number
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number|array|matrix} y number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * 
 * ubique.minus(5,6);
 * // -1
 * ubique.minus([5,6,4],[3,-1,0]);
 * // [2, 7, 4]
 * ubique.minus([5,6,4],10);
 * // [-5, -4, -6]
 * ubique.minus(NaN,[5,6,4]);
 * // [NaN, NaN, NaN]
 * ubique.minus(a,b);
 * // [[6, 3, 6], [3, 3, -10]]
 */
 $u.minus = function(x,y) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		if ($u.isnumber(y)) {
 			return x - y;
 		}
 		if ($u.ismatrix(y)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(y);i++) {
 				var vec = $u.row(y,i);
 				v[i] = $u.arrayfun(vec,function(val){return x - val;});
 			}
 			return v;
 		}
 		return $u.arrayfun(y,function(val){return x - val;})
 	}
 	if ($u.isnumber(y)) {
 		if ($u.ismatrix(x)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(x);i++) {
 				var vec = $u.row(x,i);
 				v[i] = $u.arrayfun(vec,function(val){return val - y;});
 			}
 			return v;
 		}
 		return $u.arrayfun(x,function(val){return val - y;})
 	}
 	if ($u.isarray(x) && $u.isarray(y)) {
 		var v = [];
 		for (var i = 0;i < x.length;i++) {
 			v[i] = x[i] - y[i];
 		}
 		return v;
 	}
 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
    if (($u.nrows(x) === $u.nrows(y)) && ($u.ncols(x) === $u.ncols(y))) {
     var v = [];
     for (var i = 0;i < $u.nrows(x);i++) {
      var vx = $u.row(x,i),
      vy = $u.row(y,i);
      v[i] = $u.minus(vx,vy);
    }
    return v;
  } else {
    throw new Error('input dimensions must agree');
  }
}
}

}