/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method rand
 * @summary Uniformly distribuited pseudorandom numbers
 * @description Uniformly distribuited pseudorandom numbers
 * 
 * @param  {number|array|...} args variable input arguments (max 2)
 * @return {number|matrix}    
 *
 * @example
 * ubique.rand();
 * // 0.1455961789470166
 * ubique.rand(0);
 * // []
 * ubique.rand(1);
 * // [[0.12391899712383747]]
 * ubique.rand(2);
 * // [[0.33334478829056025, 0.09839745867066085],[0.6006140187382698, 0.3131265211850405]]
 * ubique.rand([2,1]);
 * // [[0.40439655422233045], [0.7663801296148449]]
 * ubique.rand(1,2);
 * // [[0.16782891773618758, 0.5958379742223769]]
 * ubique.rand(2,3);
 * // [[0.890318026766181, 0.7398379456717521, 0.6165686929598451], [0.7234933257568628, 0.9895968120545149, 0.875643968814984]]
 */
 $u.rand = function() {
 	var _args = arguments,
 	nargs = arguments.length;
 	var _rand = function(x,y) {
 		var out = new Array(x);
 		for (var i = 0;i < x;i++) {
 			out[i] = new Array(y);
 			for (j = 0; j < y; j++) {
 				out[i][j] = Math.random();
 			}
 		}
 		return out;
 	}
 	if (nargs === 0) {
 		return Math.random();
 	} else
 	if (nargs === 1) {
 		if ($u.isnumber(_args[0])) {
 			return _rand(_args[0],_args[0]);
 		} else 
 		if ($u.isarray(_args[0])) {
 			return _rand(_args[0][0],_args[0][1]);
 		} else {
 			throw new Error('unknwon input type');
 		}
 	} else
 	if (nargs === 2) {
 		if ($u.isnumber(_args[0]) && $u.isnumber(_args[1])) {
 			return _rand(_args[0],_args[1]);
 		}
 		return _rand(_args[0][0],_args[0][1],_args[1]);
 	} else
 	if (nargs === 3) {
 		return _rand(_args[0],_args[1],_args[2]);
 	} else
 	throw new Error('too manny input arguments');
 }
}