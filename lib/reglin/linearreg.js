/**
 * Linear Regression
 */
 module.exports = function($u) {
/**
 * @method  linearreg
 * @summary Linear regression of Y on X
 * @description Return an object with fields: Beta, Alpha, R-squared, function
 * 
 * @param  {array} y array of elements in Y
 * @param  {array} x array of elements in X
 * @return {object} 
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.linearreg(x,y);
 * //  { beta: 0.02308942571228251, alpha: 0.017609073236025237, rsq: 0.0027553853574994254, fun: [Function] }
 * 
 * ubique.linearreg([100,101,99,102,105],[1,2,3,4,5])
 * //  { beta: 1.1, alpha: 98.1, rsq: 0.5707547169811321, fun: [Function] }
 * 
 * ubique.linearreg([100,101,99,102,105],[1,2,3,4,5]).fun(6) //use linear function to forecast value
 * // 104.69
 * 
 */
 $u.linearreg = function(y,x) {
  var n = y.length,
  sx = $u.sum(x),
  sy = $u.sum(y),
  sxy = $u.sum($u.times(x,y)),
  sxx = $u.sum($u.times(x,x)),
  syy = $u.sum($u.times(y,y)),
  beta = (n * sxy - sx * sy) / (n * sxx - sx * sx),
  alpha = (sy - beta * sx) / n,
  rsq = Math.pow((n *sxy - sx * sy)/Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy)),2);
  return {beta: beta,alpha: alpha, rsq: rsq,fun: function (x) {return beta * x + alpha;} }
}

}