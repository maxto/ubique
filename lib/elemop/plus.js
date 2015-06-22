/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method plus
 * @summary Addition X + Y
 * @description Addition X + Y
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number|array|matrix} y number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * 
 * ubique.plus(5,6);
 * // 11
 * 
 * ubique.plus([5,6,4],[3,-1,0]);
 * // [ 8, 5, 4 ]
 * 
 * ubique.plus([5,6,4],10);
 * // [ 15, 16, 14 ]
 * 
 * ubique.plus(a,b);
 * // [[ 4, 9, 4 ], [ 11, 13, 8 ]]
 */
 $u.plus = function(x,y) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		if ($u.isnumber(y)) {
 			return x + y;
 		}
 		if ($u.ismatrix(y)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(y);i++) {
 				var vec = $u.getrow(y,i);
 				v[i] = $u.arrayfun(vec,function(val){return x + val;});
 			}
 			return v;
 		}
 		return $u.arrayfun(y,function(val){return x + val;})
 	}
 	if ($u.isnumber(y)) {
 		if ($u.ismatrix(x)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(x);i++) {
 				var vec = $u.getrow(x,i);
 				v[i] = $u.arrayfun(vec,function(val){return val + y;});
 			}
 			return v;
 		}
 		return $u.arrayfun(x,function(val){return val + y;})
 	}
 	if ($u.isarray(x) && $u.isarray(y)) {
 		var v = [];
 		for (var i = 0;i < x.length;i++) {
 			v[i] = x[i] + y[i];
 		}
 		return v;
 	}
 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
     if (($u.nrows(x) === $u.nrows(y)) && ($u.ncols(x) === $u.ncols(y))) {
       var v = [];
       for (var i = 0;i < $u.nrows(x);i++) {
        var vx = $u.getrow(x,i),
        vy = $u.getrow(y,i);
        v[i] = $u.plus(vx,vy);
      }
      return v;
    } else {
      throw new Error('input dimensions must agree');
    }
  }
}

}