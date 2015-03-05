/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method vertcat
 * @summary Concatenate arrays or matrices vertically
 * @description Concatenate arrays or matrices vertically
 *              
 * @param  {array|matrix|...} args variable arguments (args1,args2,...)
 * @return {array|matrix}     
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * var d = [0.5,-3,2.3];
 * var f = [[3, 2], [5, 2]];
 *
 * ubique.vertcat(a,b);
 * // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
 * ubique.vertcat(a,b,b);
 * // [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
 * ubique.vertcat(c,d);
 * // [5, 6, 3, 0.5, -3, 2.3]
 * ubique.vertcat([1],[2]);
 * // [1, 2]
 * ubique.vertcat(5,7,9,8);
 * // [5,7,9,8]
 * ubique.vertcat(5,7,c);
 * // [5, 7, 5, 6, 3]
 */
 $u.vertcat = function() {
 	var _args = [0];
 	for (var i = 0; i < arguments.length; i++) {
 		_args.push(arguments[i]);
 	}
 	return $u.cat.apply(null,_args);
 }

}