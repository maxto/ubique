/**
 * Basic Statistic
 */
 module.exports = function($u) {
/**
 * @method histc
 * @summary Histogram count
 * @description  For array X counts the number of values in X that fall between the elements in the BINS array. Values outside the range in BINS are not counted.
 * 
 * @param  {array|matrix} x     array or matrix of values
 * @param  {number|array} bins  number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {aray|matrix}       
 *
 * @example
 * var n = [87,27,45,62,3,52,20,43,74,61];
 * var q = [[89,23,12],[34,5,70]];
 * var bins = [0,20,40,60,80,100];
 * 
 * ubique.histc(n,bins);
 * // [ { bins: 0, freq: 1 },
 * // { bins: 20, freq: 2 },
 * // { bins: 40, freq: 3 },
 * // { bins: 60, freq: 3 },
 * // { bins: 80, freq: 1 },
 * // { bins: 100, freq: 0 } ]
 *
 * ubique.histc(q,2,1);
 * // [ [ { bins: 34, freq: 1 },
 * //   { bins: 5, freq: 1 },
 * //  { bins: 12, freq: 1 } ],
 * // [ { bins: 61.5, freq: 0 },
 * //   { bins: 14, freq: 0 },
 * //   { bins: 41, freq: 0 } ],
 * // [ { bins: 89, freq: 1 },
 * //   { bins: 23, freq: 1 },
 * //  { bins: 70, freq: 1 } ] ]
 */
 $u.histc = function(x,bins,dim) {
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 1) {
    bins = 10;
    dim = 1;
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var _histc = function(a,bins) {
    var y = [],
    h = [], 
    out = [];
    if ($u.isnumber(bins)) {
      var xmin = $u.min(a),
      xmax = $u.max(a),
      binw = (xmax - xmin) / bins,
      anum = $u.colon(0,bins);
      y = $u.plus($u.times(anum,binw),xmin);
    } else {
      y = bins;
    }

    for (var k = 0; k < y.length; k++) {
      h[k] = 0;
      for (var i = 0; i < a.length; i++) {
        if (y[k] <= a[i] && a[i] < y[k + 1]) {
          h[k] += 1;
        } else 
        if (a[i] === y[k]) {
          h[k] += 1;
        }
      }
      out.push({bins: y[k], freq: h[k]})
    }
    return out;
  }

  if ($u.isnumber(x)) {
    return 0;
  }
  if ($u.isarray(x)) {
    return _histc(x,bins);
  }
  return $u.vectorfun(x,function(val){ return _histc(val,bins);},dim);
}
}