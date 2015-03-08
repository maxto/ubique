/**
 * Time Series Analysis
 */
 module.exports = function($u) {
/**
 * @method hurst
 * @summary Hurst index/exponent
 * @description It's a useful statistic for detecting if a time series is mean reverting (anti-persistent), totally random or persistent.
 * A value in the range [0.5) indicates mean-reverting (anti-persistent)
 * A value of 0.5 indicate a random walk
 * A value H in the range (0.5,1] indicates momentum (persistent)
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} flag normalization value 0: population, 1:sample (def: 1)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.hurst(x);
 * // 0.344059
 * ubique.hurst(x,1);
 * // 0.3669383
 * ubique.hurst(ubique.cat(1,x,y));
 * // [[0.344059, 0.51531]]
 */
 $u.hurst = function(x,flag,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		flag = 1;
 		dim = 1;
 	}
 	if (arguments.length === 2) {
 		dim = 1;
 	}
 	var _hurst = function(a,flag) {
 		var cdev = $u.cumdev(a),
 		rs = ($u.max(cdev) - $u.min(cdev)) / $u.std(a,flag);
 		return Math.log(rs) / Math.log(a.length);
 	}
 	if ($u.isnumber(x)) {
 		return 0;
 	}
 	if ($u.isarray(x)) {
 		return _hurst(x,flag);
 	}
 	return $u.vectorfun(x,function(val){return _hurst(val,flag);},dim); 

 }

}