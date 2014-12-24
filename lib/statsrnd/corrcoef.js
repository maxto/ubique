/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method corrcoef
 * @summary Correlation coefficients of two arrays X,Y
 * @description Correlation coefficients of two arrays X,Y
 *
 * @param  {array} x    array of elemnts X
 * @param  {array} y    array of elements Y
 * @param  {number} flag normalization value 0: population, 1: sample (def: 0)
 * @return {number}
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var Y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * ubique.corrcoef(X,Y)   // 0.052491764663606215
 *
 */
 $u.corrcoef = function(x,y,flag) {
 	if (arguments.length < 2) {
 		throw new Error('not enough input arguments');
 	}

 	if (arguments.length === 2) {
 		flag = 0;
 	}
 	return $u.cov(x,y,flag) / ($u.std(x,flag) * $u.std(y,flag));
 }

}
