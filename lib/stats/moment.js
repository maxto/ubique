/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method moment
 * @summary Central moments
 * @description Central moments. First moment is zero, second is variance.
 * 
 * @param  {array|matrix} x array or amatrix of elements
 * @param  {number} k k-th central sample moment
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.moment(x,3);
 * // 0.000007
 * 
 * ubique.moment(x,1);
 * // 0
 * 
 * ubique.moment(ubique.cat(0,x,y),2);
 * // [ [ 0.000486 ], [ 0.00251 ] 
 */
 $u.moment = function(x,k,dim) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}
   dim  = dim == null ? 0 : dim;

   var _moment = function(a,k) {
     var mu = $u.mean(a);
     return $u.mean(a.map(function(b) {return Math.pow(b - mu,k)}));
   }
   if ($u.isnumber(x)) {
     return NaN;
   }
   return $u.vectorfun(dim,x,_moment,k);

 }

}