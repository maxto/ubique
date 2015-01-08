/**
 * Data Transformation
 */
 module.exports = function($u) {
/**
 * @method  tick2ret
 * @summary  Convert a value series to a return series
 * @description  Convert a value series to a return series. 'simple' (default) for simple returns, 'continuous' for continuously compounded
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
 * ubique.tick2ret(d); // [-7, -1.76667]
 * ubique.tick2ret(e); // [[-0.333333, -0.8]]
 */
 $u.tick2ret = function(x,mode,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    mode = 'simple';
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  if ($u.numel(x) < 2) {
    throw new Error('insert minimum two elements');
  }
  var _tick2ret = function(a,mode,sval) {
    var r = [];
    if (mode === 'simple') {
      for (var i = 1;i < a.length;i++) {
        r[i - 1] = a[i] / a[i - 1] - 1;
      }
    } else 
    if (mode === 'continuous') {
      for (var i = 1;i < a.length;i++) {
        r[i - 1] = Math.log(a[i] / a[i - 1]);
      }
    } else {
      throw new Error('unkwon retun method');
    }
    return r;
  }
  if ($u.isarray(x)) {
    return _tick2ret(x,mode);
  }
  return $u.vectorfun(x,function(val){return _tick2ret(val,mode);},dim);
  
}

}
