/**
 * Time Series Analysis
 */
 module.exports = function($u) {
/**
 * @method tomonthly
 * @summary Convert a time series to a monthly frequency
 * @description Convert a time series to a monthly frequency. Default: all days
 * in the range.
 *
 * @param  {array} nd array of unix dates
 * @param  {array|matrix} nv array or matrix of values
 * @return {matrix}
 *
 * @example
 * ubique.tomonthly(ubique.datenum(['15-01-18','15-02-28','15-03-05','15-03-24','15-04-27'],'YY-MM-DD'),[100,99,102,103,98]);
 * // [ [ 1421535600, 1425078000, 1427151600, 1430085600 ],
 * // [ 100, 99, 103, 98 ] ]
 */
 $u.tomonthly = function(nd,nv) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  // basic mode: all data, exact on last day of month
  var md = $u.month(nd);
  var df = $u.diff(md);
  df[0] = 1;
  df = $u.cat(0,df,1);

  var idx = $u.find(df.map(function(el){return el !== 0;}));
  if ($u.isarray(nv)) {
    var newv = $u.subset(nv,idx);
  }
  if ($u.ismatrix(nv)) {
    var newv = $u.subset(nv,idx,':');
  }
  return [$u.subset(nd,idx),newv];

}
}