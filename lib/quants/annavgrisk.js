/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method annavgrisk
 * @summary Annualized Average Risk
 * @description Annualized standard deviation of asset/portfolio values
 * 
 * @param  {number|array|matrix} x rate or return 
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 *
 * ubique.annavgrisk(x,12); // 0.0804728
 * ubique.annavgrisk(z,12); // [[0.0804728, 0.182948]]
 */
 $u.annavgrisk = function(x,t,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		t = 252;
 		dim = 1;
 	}
 	if (arguments.length === 2) {
 		dim = 1;
 	}
 	var _aavgrisk = function(a,t) {
 		return Math.sqrt(t) * $u.std(a);
 	}
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return  _aavgrisk(x,t);
 	}
 	return $u.vectorfun(x,function(val){return _aavgrisk(val,t);},dim);
 }
}
