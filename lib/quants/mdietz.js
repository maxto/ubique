/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method mdietz
 * @summary Historical performance of an investment portfolio with external cash flows
 * @description Historical performance of an investment portfolio with external cash flows
 * 
 * @param  {number} ev  ending value
 * @param  {number} bv  beginning market value
 * @param  {number|array} cf  external cashflows (inflows/outflows)
 * @param  {number|array} cfd number of calendar days from the beginning of the period that cash flow occurs
 * @param  {number} cd  total number of calendar days in the measurement period
 * @return {number}
 *
 * @example
 * var ev = 104.4,bv = 74.2,cf = 37.1,cfd = 14, cd = 31;
 * ubique.mdietz(ev,bv,cf,cfd,cd); //  -0.07298099559862156
 *
 * var ev = 1200,bv = 1000,cf = [10,50,35,20],cfd = [15,38,46,79],cd = 90;
 * ubique.mdietz(ev,bv,cf,cfd,cd); //  0.0804
 */
 $u.mdietz = function(ev,bv,cf,cfd,cd) {
  if (arguments.length < 5) {
    throw new Error('not enough input arguments');
  }
  var md = -99999,
  w = [];
  if ($u.isnumber(cf)) {
    md = (ev - bv - cf) / (bv + (cf * (1 - cfd / cd)));
  } else {
    if (cd <= 0) {
      throw new Error('actual number of days in the period negative or zero');
    }
    for (var i = 0;i < cf.length;i++) {
      if (cfd[i] < 0) {
        throw new Error('number of days negative or zero');
      }
      w[i] = (1 - cfd[i] / cd);
    }
      var ttwcf = 0; //total weighted cash flows
      for (var i = 0;i < cf.length;i++) {
        ttwcf += w[i] * cf[i];
      }
      var tncf = 0; //total net cash flows
      for (var i = 0;i < cf.length;i++) {
        tncf += cf[i];
      }
      md = (ev - bv - tncf) / (bv + ttwcf);
    }
    return md;
  }
}