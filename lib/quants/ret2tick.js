/**
 * Data Transformation
 */
 module.exports = function($u) {
/**
 * @method  ret2tick
 * @summary  Convert a return series to a value series with a start value
 * @description  Convert a return series to a value series with a start value
 * 
 * @param  {array|matrix} x  array of elements
 * @param  {string} mode  method to compute returns. 'simple','continuous' (def: simple)
 * @param  {number} sval  start value (def: 1)
 * @return {array|matrix}     
 *
 * @example
 * var d = [0.5,-3,2.3];
 * var e = [[9, 5], [6, 1]];
 *
 * ubique.ret2tick(0.05); // [1, 1.05]
 * ubique.ret2tick(d,'simple',100); // [100, 150, -300, -990]
 * ubique.ret2tick(e,'simple',100,0); // [[100, 1000, 6000], [100, 700, 1400]]
 */
 $u.ret2tick = function(x,mode,sval,dim) {
   if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    mode = 'simple';
    sval = 1;
    dim = 1;
  }
  if (arguments.length === 2) {
    sval = 1;
    dim = 1;
  }
  if (arguments.length === 3) {
    dim = 1;
  }

  var _ret2tick = function(a,mode,sval) {
    if ($u.isnumber(a)) {
      a = [a];
    }
    var r = [];
    r[0] = sval;
    if (mode === 'simple') {
      for (var i = 1; i <= a.length; i++) {
        r[i] = r[i - 1] * (1 + a[i - 1]);
      }
    } else 
    if (mode === 'continuous') {
      for (var i = 1; i <= a.length; i++) {
        r[i] = r[i - 1] * Math.exp(a[i - 1]);
      }
    } else {
      throw new Error('unknown return method');
    }
    return r;
  }

  if ($u.isnumber(x) || $u.isarray(x)) {
    return _ret2tick(x,mode,sval);
  }
  return $u.vectorfun(x,function(val){return _ret2tick(val,mode,sval);},dim);
  
}

}