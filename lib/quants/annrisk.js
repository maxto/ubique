/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method annrisk
 * @summary Annualized Risk
 * @description Annualized standard deviation of asset/portfolio returns
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array|matrix}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.annrisk(x,12);
 * // 0.233815
 *
 * ubique.annrisk(cat(1,x,y),12);
 * // [ [ 0.233815, 0.14509 ] ]
 */
 $u.annrisk = function(x,t,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	t = t || 252;
  dim = dim || 1;

 	var _annrisk = function(a,t) {
 		return Math.sqrt(t) * $u.std(a);
 	}
 	if ($u.isnumber(x)) {
 		return NaN;
 	}
 	if ($u.isarray(x)) {
 		return  _annrisk(x,t);
 	}
 	return $u.vectorfun(x,function(val){return _annrisk(val,t);},dim);
 }
}
