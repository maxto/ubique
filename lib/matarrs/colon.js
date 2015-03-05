/**
 * Indexing
 */
 module.exports = function($u) {
/**
 * @method colon
 * @summary Array of numbers from L to U with step S
 * @description Array of numbers from L to U with step S
 * 
 * @param  {number} l lower value of the array
 * @param  {number} u upper value of the array
 * @param  {number} s step value (def: 1)
 * @return {array}
 *
 * @example
 * ubique.colon(1,10,1);
 * // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * ubique.colon(10,1,1);
 * //  []
 * ubique.colon(-5,5,2);
 * // [-5, -3, -1, 1, 3, 5]
 * ubique.colon(-7,14,2);
 * // [-7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13]
 */
 $u.colon = function(l,u,s) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 2 || $u.isundefined(s)) {
 		s = 1;
 	}
 	if (s === 0 || (s > 0 && l > u) || (s < 0 && l < u)) {
 		return [];
 	}
 	var t = $u.fix((u - l) / s);
 	var out = [];
 	out[0] = l;
 	for (var i = 1; i <= t; i++ ) {
 		out[i] = out[i - 1] + s;
 	}
 	return out;
 }

}