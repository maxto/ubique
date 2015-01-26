/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method drawdown
 * @summary Drawdown
 * @description Any continuous losing return period. Return drawdown from peak and time to recovery arrays
 *  
 * @param  {array|matrix} x    asset/portfolio values
 * @param  {string} mode drawdown calculation. 'return','geometric' (def: 'return')
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {object|matrix}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var xx = $u.cumprod($u.plus(x,1));
 * var yy = $u.cumprod($u.plus(y,1));
 * var zz = ubique.cat(1,xx,yy);
 *
 * ubique.drawdown(xx); // { drawdown: [ 0, 0, 0, 0.00900000000000004, 0, 0, 0, 0, 0.013999999999999995, 0 ],
 *                      //   recovery: [ 0, 0, 0, 4, 0, 0, 0, 0, 9, 0 ] }
 * ubique.drawdown(zz); // [ [ { drawdown: [Object], recovery: [Object] },
 *                             { drawdown: [Object], recovery: [Object] } ] ]
 */
 $u.drawdown = function(x,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    mode = 'return';
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var ddown = function(a,mode) {
    var highest = a[0],
    dd = $u.array(a.length,0),
    recov = $u.array(a.length,0);
    for (var i = 0; i < a.length; i++) {
      if (highest <= a[i]) {
        highest = a[i];
      }
      dd[i] = (highest - a[i]) / highest;
      if (dd[i] !== 0) {
        recov[i] = i + 1;
      }
    }
    return {drawdown: dd, recovery: recov};
  }
  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return ddown(x,mode);
  }
  return $u.vectorfun(x,function(val){return ddown(val,mode);},dim);
}

}