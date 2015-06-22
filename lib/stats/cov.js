/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method cov
 * @summary Covariance matrix
 * @description Covariance matrix
 *
 * @param  {array|matrix} x array or matrix of elemnts X
 * @param  {array|matrix} y array or matrix of elements Y
 * @param  {number} flag Bessel's correction 0: population, 1: sample (def: 1)
 * @return {number|array}
 *
 * @example
 * var c = [5,6,3];
 * var d = [0.5,-3,2.3];
 * var e = [[9, 5], [6, 1]];
 * var f = [[3, 2], [5, 2]];
 * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
 *
 * ubique.cov(c);
 * // 2.33333
 * 
 * ubique.cov(c,d);
 * // [ [ 2.333333, -3.833333 ], [ -3.833333, 7.263333 ] ]
 * 
 * ubique.cov(c,d,0);
 * // [ [ 1.555556, -2.555556 ], [ -2.555556, 4.842222 ] ]

 * ubique.cov(e,f);
 * // [ [ 10.916667, 2 ], [ 2, 2 ] ]
 * 
 * ubique.cov(l);
 * // [ [ 0.333333, 1.166667, 0 ],[ 1.166667, 6.333333, -3 ],[ 0, -3, 4 ] ]
 */
 $u.cov = function(x) {
  var arglen = arguments.length;
 	if (arglen === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arglen > 3) {
 		throw new Error('too many input arguments');
 	}
 	if (arglen === 3) {
 		flag = arguments[arglen - 1];
 		var flagrule = $u.isscalar(flag) && (flag === 0 || flag === 1);
 		if (!flagrule) {
 			throw new Error('third input must be 0 or 1');
 		}
 		arglen = arglen - 1;
 	} else
 	if (arglen === 2 && $u.isscalar(arguments[arglen - 1]) && (arguments[arglen - 1] === 0 || arguments[arglen - 1] === 1)) {
 			flag = arguments[arglen - 1];
 			arglen = arglen - 1;
 	} else {
 		flag = 1;
 	}

    if (arglen === 1 && ($u.isarray(x) || $u.isvector(x))) {
    	x = $u.flatten(x);
    	return $u.varc(x);
    }
 	if (arglen === 2) {
 		y = arguments[1];
 		x = $u.transpose($u.flatten(x));
 		y = $u.transpose($u.flatten(y));
 		if (x.length !== y.length) {
 			throw new Error('input dimension must agree');
 		}
 		x = $u.cat(1,x,y);
 	}
 	var m = $u.nrows(x);
 	var mu = $u.mean(x,1);
 	var z = $u.minus(x,$u.repmat(mu,m,1));
 	return $u.rdivide($u.mtimes($u.transpose(z),z), m - flag);
 }

}

