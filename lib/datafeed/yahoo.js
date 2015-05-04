/**
 * Datafeed
 */
 module.exports = function ($u) {
/**
 * @method yahoo
 * @summary Yahoo Finance historical
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
 * // var options = {
 * // 'symbol': 'AAPL',
 * // 'from': '2015-01-01',
 * // 'to': '2015-05-01',
 * // 'period': 'd',
 * // 'YYYY-MM-DD'
 * // };
 * // ubique.yahoo.historical(args,function(err,data){
 * // console.log(data)
 * // });
 * //
 */
 $u.yahoo = {
  histurl: 'http://real-chart.finance.yahoo.com/table.csv?',
  ip: '',
  port: '',
  historical: function(options,callback) {
    options = options || {};
    options.symbol = options.symbol || null;
    options.from = options.from || null;
    options.to = options.to || $u.datestr($u.today(),'YYYY-MM-DD');
    options.period = options.period || 'd';
    options.fmt = options.fmt || 'YYYY-MM-DD';
    callback = callback || function() {};
   
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
  var urlto = '&d=' + (edt[1]) + '&e=' + edt[2] + '&f=' + edt[0];
  var urlperiod = '&g=' + options.period;
  var URL = this.histurl + urlsym + urlfrom + urlto + urlperiod;

  $u.__request(URL,function(err,res,body) {

    cvsdata =  body.trim().split('\n');
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
    callback(null,D);
  });

}
}

}