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
 * ubique.vertcat([[5,6,5],[7,8,-1]],[[-1,3,-1],[4,5,9]]);
 * // [ [ 5, 6, 5 ], [ 7, 8, -1 ], [ -1, 3, -1 ], [ 4, 5, 9 ] ]
 * 
 * ubique.vertcat(5,7,9,8);
 * // [ 5, 7, 9, 8 ]
 */
 $u.vertcat = function() {
  var _args = $u.argsarray.apply(null,arguments);
  return $u.cat.apply(null,[].concat(0,_args));
}

}