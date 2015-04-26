/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method corrcoef
 * @summary Correlation coefficients of two arrays X,Y
 * @description Correlation coefficients of two arrays X,Y
 *
 * @param  {array|matrix} x array or matrix of elemnts X
 * @param  {array|matrix} y array or matrix of elements Y
 * @param  {number} flag Bessel's correction 0: population, 1: sample (def: 1)
 * @return {matrix}
 *
 * @example
 * var c = [5,6,3];
 * var d = [0.5,-3,2.3];
 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
 *
 * ubique.corrcoef(l);
 * // [[1, 0.802955, 0], [0.802955, 1, -0.59604], [0, -0.59604, 1]]
 * ubique.corrcoef(c,d);
 * // [[1, -0.931151], [-0.931151, 1]]
 */
 $u.corrcoef = function(x) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var _args = [x];
 	for (var i = 1; i < arguments.length; i++) {
 		_args.push(arguments[i]);
 	}
 	var covm = $u.cov.apply(null,_args),
 	sigma = $u.sqrt($u.diag(covm)),
 	m = sigma.length,
 	covm = $u.rdivide(covm,$u.repmat(sigma,1,m)),
 	covm = $u.rdivide(covm,$u.repmat($u.transpose(sigma),m,1));
 	return covm;
 }

}
