/**
 * Datafeed
 */
 module.exports = function ($u) {
/**
 * @method yahooSync
 * @summary Download CSV Yahoo Finance historical (sync request)
 * @description Download CSV Yahoo Finance historical. Returns an object:
 * 
 * {
 *   'symbol': options.symbol,
 *   'from': options.from,
 *   'to': options.to,
 *   'period': options.period,
 *   'date': nDate,
 *   'open': nOpen,
 *   'high': nHigh,
 *   'low': nLow,
 *   'close': nClose,
 *   'volume': nVolume,
 *   'adjclose': nAdjClose
 * }
 *
 * @param {object} options options with fields:
 *                         .symbol Yahoo symbol name
 *                         .from start date
 *                         .to last date
 *                         .period period "d","w","m"
 *                         .fmt date format (def: "YYYY-MM-DD")
 * 
 * @return {object} 
 *
 * @example
 * var options = { 'symbol': 'AAPL', 'from': '2015-01-02', 'to': '2015-01-08', 'period': 'd', 'fmt': 'YYYY-MM-DD' };
 * 
 * ubique.yahooSync.historical(options);
 * //
 * // { symbol: 'AAPL',
 * //     from: '2015-01-02',
 * //       to: '2015-01-08',
 * //   period: 'd',
 * //     date: [ '2015-01-02',
 * //             '2015-01-05',
 * //             '2015-01-06',
 * //             '2015-01-07',
 * //             '2015-01-08' ],
 * //             open: [ 111.39, 108.29, 106.54, 107.2, 109.23 ],
 * //             high: [ 111.44, 108.65, 107.43, 108.2, 112.15 ],
 * //             low: [ 107.35, 105.41, 104.63, 106.7, 108.7 ],
 * //             close: [ 109.33, 106.25, 106.26, 107.75, 111.89 ],
 * //             volume: [ 53204600, 64285500, 65797100, 40105900, 59364500 ],
 * //             adjclose: [ 108.44723, 105.3921, 105.40202, 106.87998, 110.98656 ] }
 */
 $u.yahooSync = {
  histurl: 'http://real-chart.finance.yahoo.com/table.csv?',
  ip: '',
  port: '',
  historical: function(options) {
    options = options || {};
    options.symbol = options.symbol || null;
    options.from = options.from || null;
    options.to = options.to || $u.datestr($u.today(),'YYYY-MM-DD');
    options.period = options.period || 'd';
    options.fmt = options.fmt || 'YYYY-MM-DD';

    var D = {};
    var dates = [];
    var values = [];
    var sdt = $u.datevec(options.from,options.fmt);
    var edt = $u.datevec(options.to,options.fmt);

  // set URL string
  var cvsdata = {};
  var urlxp = '&ignore=.csv';
  var urlsym = '&s=' + options.symbol.toUpperCase();
  var urlfrom = '&a=' + (sdt[1] - 1) + '&b=' + sdt[2] + '&c=' + sdt[0];
  var urlto = '&d=' + (edt[1] - 1) + '&e=' + edt[2] + '&f=' + edt[0];
  var urlperiod = '&g=' + options.period;
  var URL = this.histurl + urlsym + urlfrom + urlto + urlperiod;

  var res = $u.__syncrequest('GET',URL);

  cvsdata =  res.body.toString().trim().split('\n');
  var header = cvsdata.shift().split(',');
  var nDate = [];
  var nOpen = [];
  var nHigh = [];
  var nLow = [];
  var nClose = [];
  var nVolume = [];
  var nAdjClose = [];

  cvsdata.sort().map(function(el) {
    var temp = el.split(',');
    nDate.push(temp[0]);
    nOpen.push(Number(temp[1]));
    nHigh.push(Number(temp[2]));
    nLow.push(Number(temp[3]));
    nClose.push(Number(temp[4]));
    nVolume.push(Number(temp[5]));
    nAdjClose.push(Number(temp[6]));
  });

  D = {
    'symbol': options.symbol,
    'from': options.from,
    'to': options.to,
    'period': options.period,
    'date': nDate,
    'open': nOpen,
    'high': nHigh,
    'low': nLow,
    'close': nClose,
    'volume': nVolume,
    'adjclose': nAdjClose
  };
  return D;

}
}

}