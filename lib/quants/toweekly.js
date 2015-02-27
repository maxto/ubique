/**
 * Time Series Analysis
 */
 module.exports = function($u) {
/**
 * @method toweekly
 * @summary Convert a time series to a weekly frequency
 * @description Convert a time series to a weekly frequency. Default: all days
 * in the range. Example: daily dates [Wed,...Fri,...Mon,...Fri,...Thu] will become 
 * [Wed,...,Fri...,Fri...,Thu]
 *
 * @param  {array} nd array of unix dates
 * @param  {array|matrix} nv array or matrix of values
 * @return {matrix}
 *
 * @example
 * var nd = ubique.datenum(['15-01-15','15-01-23','15-01-30','15-02-04'],'YY-MM-DD');
 * var nv = [100,99,102,103,98];
 * var nv2 = [1.2,1.1,1.3,1.4,0.9];
 * var nvm = ubique.cat(1,nv,nv2);
 * 
 * ubique.toweekly(nd,nv);
 * // [ [ 1421276400, 1421967600, 1422572400, 1423004400 ],
 * // [ 100, 99, 102, 103 ] ]
 * ubique.toweekly(nd,nvm);
 * // [ [ 1421276400, 1421967600, 1422572400, 1423004400 ],
 * // [ [ 100, 1.2 ], [ 99, 1.1 ], [ 102, 1.3 ], [ 103, 1.4 ] ] ]
 */
 $u.toweekly = function(nd,nv) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var wd = $u.weekday(nd);

  // basic mode: all data, exact on Friday
  var idx = $u.find(wd.map(function(a) {return a === 5;}));
  if (wd[0] !== 5) {
    idx = $u.cat(0,0,idx);
  }
  if (wd[wd.length - 1] !== 5) {
    idx = $u.cat(0,idx,nd.length - 1);
  }
  if ($u.isarray(nv)) {
    var newv = $u.subset(nv,idx);
  }
  if ($u.ismatrix(nv)) {
    var newv = $u.subset(nv,idx,':');
  }
  return [$u.subset(nd,idx),newv];

}
}