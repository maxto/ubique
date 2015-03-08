/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method mode
 * @summary Most frequent value in an array of elements 
 * @description Most frequent value in an array of elements (Unimodal)
 * 
 * @param  {array|matrix} x array of values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var c = [5,6,3];
 *
 * ubique.mode(c);
 * // 3
 * ubique.mode(a,0);
 * // [5, -1]
 * ubique.mode(a);
 * // [[5, 6, -1]]
 */
 $u.mode = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var _mode = function(a) {
    var counter = {},
    mode = [],
    max = 0,
    _a = $u.sort(a);
    for (var i = 0; i < x.length; i++) {
      if (!(_a[i] in counter)) {
        counter[_a[i]] = 0;
      } else {
        counter[_a[i]]++;
      }
      if (counter[_a[i]] === max) {
        mode.push(_a[i]);
      } else 
      if (counter[_a[i]] > max) {
        max = counter[_a[i]];
        mode = [_a[i]];
      }
    }
    return mode[0];
  }
  if ($u.isnumber(x)) {
    return x;
  }
  if ($u.isarray(x)) {
    return  _mode(x);
  }
  return $u.vectorfun(x,function(val){return _mode(val);},dim);

}

}