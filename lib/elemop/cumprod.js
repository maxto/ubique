/**
 * Arithmetic Operations
 */
 module.exports = function($u) {
 /**
 * @method cumprod
 * @summary Cumulative product of array elements
 * @description Cumulative product of array elements
 * 
 * @param  {array|matrix} x array or matrix of values
 * @param  {number} dim dimension selected, 1: column 0: row (def: 1)
 * @return {array|matrix}   
 *
 * @example
 * ubique.cumprod([5,6,3]); // [5, 30, 90]
 * ubique.cumprod([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [35, 48, -5]]
 * ubique.cumprod([[5,6,5],[7,8,-1]],0); // [[5, 30, 150], [7, 56, -56]]
 */
 $u.cumprod = function(x,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    dim = 1;
  }
  var _cumprod =  function(a) {
    var v = new Array(a.length);
    v[0] = a[0];
    for (var i = 1;i < a.length;i++) {
      v[i] = v[i - 1] * a[i];
    }
    return v;
  }
  if ($u.isarray(x)) {
    return _cumprod(x);
  }
  return $u.vectorfun(x,function(val){return _cumprod(val);},dim);
}

}