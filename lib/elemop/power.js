/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method power
 * @summary Element-wise power X. ^ Y
 * @description Element-wise power X. ^ Y
 * 
 * @param  {number|array|matrix} x number or array of values
 * @param  {number|array|matrix} y number or array of values
 * @return {number|array|matrix}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * var d = [0.5,-3,2.3];
 * 
 * ubique.power(5,4); // 625
 * ubique.power(c,5); // [3125, 7776, 243]
 * ubique.power(5,c); // [3125, 15625, 125]
 * ubique.power(a,5); // [[3125, 7776, 3125], [16807, 32768, -1]]
 * ubique.power(5,a); // [[3125, 15625, 3125], [78125, 3.90625e+5, 0.2]]
 * ubique.power(c,d); // [2.23607, 0.00462963, 12.5135]
 * ubique.power(a,b); // [[0.2, 216, 0.2], [2401, 32768, -1]]
 * 
 */
 $u.power = function(x,y) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
 		if ($u.isnumber(y)) {
 			return Math.pow(x,y);
 		}
 		if ($u.ismatrix(y)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(y);i++) {
 				var vec = $u.row(y,i);
 				v[i] = $u.arrayfun(vec,function(val){return Math.pow(x,val);});
 			}
 			return v;
 		}
 		return $u.arrayfun(y,function(val){return Math.pow(x,val);})
 	}
 	if ($u.isnumber(y)) {
 		if ($u.ismatrix(x)) {
 			var v = [];
 			for (var i = 0;i < $u.nrows(x);i++) {
 				var vec = $u.row(x,i);
 				v[i] = $u.arrayfun(vec,function(val){return Math.pow(y,val);});
 			}
 			return v;
 		}
 		return $u.arrayfun(x,function(val){return Math.pow(y,val);})
 	}
 	if ($u.isarray(x) && $u.isarray(y)) {
 		var v = [];
 		for (var i = 0;i < x.length;i++) {
 			v[i] = Math.pow(x[i],y[i]);
 		}
 		return v;
 	}
 	if ($u.ismatrix(x) && $u.ismatrix(y)) {
 		var v = [];
 		for (var i = 0;i < $u.nrows(x);i++) {
 			var vx = $u.row(x,i),
 			vy = $u.row(y,i);
 			v[i] = $u.power(vx,vy);
 		}
 		return v;
 	}
 }

}