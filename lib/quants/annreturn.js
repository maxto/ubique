/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method annreturn
 * @summary Annualisation of return (1 + X) ^ (t / n)
 * @description Annualisation of return (1 + X) ^ (t / n)
 * 
 * @param  {number} r rate of return
 * @param  {number} t frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
 * @param  {number} n period of interest
 * @return {number}   
 *
 * @example
 * ubique.annreturn([0.015,0.02],12,20);
 * // [0.00897319, 0.0119524]
 */
 $u.annreturn = function(r,t,n) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		t = 252;
 		n = 1;
 	}
 	if (arguments.length === 2) {
 		n = 1;
 	}
 	return $u.minus($u.power($u.plus(1,r),(t / n)),1);
 }
}
