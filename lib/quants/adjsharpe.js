/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method adjsharpe
 * @summary Adjusted Sharpe Ratio
 * @description Sharpe Ratio adjusted for skewness and kurtosis with a penalty factor 
 * for negative skewness and excess kurtosis.
 *
 * Adjusted Sharpe ratio = SR x [1 + (S/6) x SR - ((K-3) / 24) x SR^2]
 * SR = sharpe ratio
 * K = kurtosis
 * S = skewness
 * 
 * @param  {array|matrix} x array of value
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} dim dimension 0: row, 1: column (def: 0)
 * @return {number}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.adjsharpe(x,0.02/12);
 * // 0.748134
 * 
 * ubique.adjsharpe(cat(0,x,y));
 * // [ [ 0.830583, 0.245232 ] ]
 */
 $u.adjsharpe = function(x,frisk,dim) {
  if (arguments.length === 0) {
   throw new Error('not enough input arguments');
 }
 frisk = frisk == null ? 0 : frisk;
 dim = dim == null ? 0 : dim;

 var _asharpe = function(a,frisk) {
   var sr = $u.sharpe(a,frisk);
   var sk = $u.skewness(a);
   var ku = $u.kurtosis(a);
   return sr * (1 + (sk/6) * sr - ((ku - 3)/24) * Math.sqrt(sr));
 }
 if ($u.isnumber(x)) {
   return NaN;
 }
 return $u.vectorfun(dim,x,_asharpe,frisk);
}
}
