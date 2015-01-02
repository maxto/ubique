/**
 * 1-D Interpolation
 */
 module.exports = function($u) {
/**
 * @method  interp1
 * @summary Linear interpolation
 * @description Linear interpolation. Returns the 1-D value of Y, given Xi query points. 
 * 
 * @param  {array} x sample points
 * @param  {array} y corresponding values of sample points
 * @param  {number|array} new query points. For values outside [min(X),max(X)] NaN is returned.
 * @return {array}
 *
 * @example
 * var x = [1,2,3,4,5,6];
 * var y = [2,4,6,8,10,12];
 * var xnew = [2,4,-2,10];
 *
 * ubique.interp1(x,y,xnew); // [4, 8, NaN, NaN]
 */
 $u.interp1 = function(x,y,xnew) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (x.length !== y.length) {
    throw new Error('input dimension mismatch');
  }
  if ($u.isnumber(xnew)) {
    xnew = [xnew];
  }
  var ynew = new Array(xnew.length),
  n = x.length,
  dx = new Array(n),
  dy = new Array(n),
  slope = new Array(n),
  intercept = new Array(n);

  for (var i = 0; i < n; i++) {
    if (i < n - 1) {
      dx[i] = x[i + 1] - x[i];
      dy[i] = y[i + 1] - y[i];
      slope[i] = dy[i] / dx[i];
      intercept[i] = y[i] - x[i] * slope[i];
    } else {
      dx[i] = dx[i - 1];
      dy[i] = dy[y - 1];
      slope[i] = slope[i - 1];
      intercept[i] = intercept[i - 1];      
    }
  }

  for (var j = 0; j < xnew.length; j++) {
    if (xnew[j] < $u.min(x) || xnew[j] > $u.max(x)) {
      ynew[j] = NaN;
    } else {
      var idx = findneighb(xnew[j],x);
      ynew[j] = slope[idx] * xnew[j] + intercept[idx];
    }
  }
  if ($u.numel(ynew) === 1) {
    return ynew[0];
  } else {
    return ynew;
  }
}
var findneighb = function(value,arr) {
  var dist = $u.maxval,
  idx = -1;
  for (var i = 0; i < arr.length; i++) {
    var newdist = value - arr[i];
    if (newdist > 0 && newdist < dist) {
      dist = newdist;
      idx = i;
    }
  }
  return idx;
}

}
