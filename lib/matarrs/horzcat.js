/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method horzcat
 * @summary Concatenate arrays or matrices horizontally
 * @description Concatenate arrays or matrices horizontally
 *              
 * @param  {array|matrix|...} args variable arguments (args1,args2,...)
 * @return {array|matrix}     
 *
 * @example
 * ubique.horzcat([[5,6,5],[7,8,-1]],[[-1,3,-1],[4,5,9]]);
 * // [ [ 5, 6, 5, -1, 3, -1 ], [ 7, 8, -1, 4, 5, 9 ] ]
 * 
 * ubique.horzcat(5,6,7);
 * // [ [ 5, 6, 7 ] ]
 * 
 */
 $u.horzcat = function() {
   var _args = $u.argsarray.apply(null,arguments);
   return $u.cat.apply(null,[].concat(1,_args));
 }

}