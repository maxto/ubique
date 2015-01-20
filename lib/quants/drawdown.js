/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * #TOFIX
 * @method drawdown
 * @summary Drawdown
 * @description Any continuous losing return period
 *  
 * @param  {array} x    asset/portfolio values
 * @param  {logical} mode drawdown calculation. TRUE: 'geometric', FALSE: 'arithmetic' (def: TRUE)
 * @return {object}      drawdown values (array) and recovery time (array)
 *
 * @example
 * var X = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * drawdown(X,true)
 * // { drawdown: [ 0, 0, 0, 0.00900000000000004, 0, 0, 0, 0, 0.013999999999999995, 0 ],
 * // recovery: [ 0, 0, 0, 1, 0, 0, 0, 0, 1, 0 ] }
 */
 $u.drawdown = function(x,mode) {
  var cumret = new Array(x.length);
  /*
  if (mode === true || mode === undefined) {
    cumret = $u.cumprod($u.plus(x,1));
  } else { 
    cumret = $u.plus($u.cumsum(x),1);
  }
  var cummax = $u.cummax(cumret);
  var dd = $u.plus($u.rdivide(cumret,cummax),-1); //drawdown
  */
  cumret = $u.cumprod(math.add(x,1))
  return cumret;
}

}