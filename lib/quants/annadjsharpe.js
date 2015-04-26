/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method annadjsharpe
 * @summary Annualized Adjusted Sharpe Ratio
 * @description Sharpe Ratio adjusted for skewness and kurtosis with a penalty factor 
 * for negative skewness and excess kurtosis.
 *
 * Adjusted Sharpe ratio = SR x [1 + (S/6) x SR - ((K-3) / 24) x SR^2]
 * SR = sharpe ratio with annualized return/risk
 * K = kurtosis
 * S = skewness
 * 
 * @param  {array|matrix} x array of value
 * @param  {number} frisk annual free-risk rate (def: 0)
 * @param  {number} t frequency 252: daily (default), 52: weekly, 12: monthly, 4: quarterly
 * @param  {string} type 'geometric' or 'simple' (def: 'geometric')
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array|matrix}       
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.annadjsharpe(x,0.02,12,'geometric');
 * // 3.376724
 * 
 * ubique.annadjsharpe(cat(1,x,y),0,12);
 * // [ [ 3.766555, 0.827757 ] ]
 */
 $u.annadjsharpe = function(x,frisk,t,type,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  frisk = frisk || 0;
  t = t || 252;
  type = type || 'geometric';
  dim = dim || 1;

  var _asharpe = function(a,frisk,t,type) {
   var aret = $u.annreturn(a,t,type),
   arisk = $u.annrisk(a,t),
   sr = (aret - frisk) / arisk,
   sk = $u.skewness(a),
   ku = $u.kurtosis(a);
   return sr * (1 + (sk/6) * sr - ((ku - 3)/24) * Math.sqrt(sr));
 }
 if ($u.isnumber(x)) {
   throw NaN;
 }
 if ($u.isarray(x)) {
   return  _asharpe(x,frisk,t,type);
 }
 return $u.vectorfun(x,function(val){return _asharpe(val,frisk,t,type);},dim);
}
}
