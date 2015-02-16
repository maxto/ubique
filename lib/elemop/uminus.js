/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
/**
 * @method uminus
 * @summary Unary minus -X
 * @description Unary minus -X
 * 
 * @param  {number|array|matrix} x number or array of values
 * @return {number|array|matrix}
 *
 * @example
 * ubique.uminus(-5); // 5
 * ubique.uminus([5,6]); // [-5, -6]
 * ubique.uminus([[5,6],[-1,-3]]); // [[-5, -6], [1, 3]]
 */
 $u.uminus = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if ($u.isnumber(x)) {
    return -x;
  }
  return $u.arrayfun(x,function(a){return -a;});
}

}