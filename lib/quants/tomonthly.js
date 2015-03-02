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
 * var nd = ubique.datenum(['15-01-18','15-02-28','15-03-05','15-03-24','15-04-27'],'YY-MM-DD');
 * var nv = [100,99,102,103,98];
 * var nv2 = [1.2,1.1,1.3,1.4,0.9];
 * var nvm = ubique.cat(1,nv,nv2);
 * 
 * ubique.tomonthly(nd,nv);
 * // [ [ 1421535600, 1425078000, 1427151600, 1430085600 ],
 * // [ 100, 99, 103, 98 ] ]
 * ubique.tomonthly(nd,nvm);
 * // [ [ 1421535600, 1425078000, 1427151600, 1430085600 ],
 * [ [ 100, 1.2 ], [ 99, 1.1 ], [ 103, 1.4 ], [ 98, 0.9 ] ] ]
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