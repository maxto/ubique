/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method irr
 * @summary Internal rate of return on an investment based on a series of periodic cash flows
 * @description Calculates the internal rate of return on an investment
 * based on a series of regularly/irregurarly periodic cash flows.
 * 
 * @param  {array} cf income or payments associated with the investment. Must contain at least one negative and one positive cash flow to calculate rate of return, and the first amount must be negative
 * @param  {array} cfd number of calendar days from the beginning of the period that cash flow occurs
 * @param  {number} cd total number of calendar days in the measurement period
 * @param  {number} guess estimate for what the internal rate of return will be (def: 0.1)
 * @return {number}       
 *
 * @example
 * //Simple IRR
 * ubique.irr([250000,25000,-10000,-285000]);
 * // 0.024712563094781776
 * ubique.irr([74.2,37.1,-104.4],[0,1,2],2);
 * // -0.07410820570460687
 *
 * //Modified IRR
 * ubique.irr([250000,25000,-10000,-285000],[0,45,69,90],90);
 * // 0.07692283872311274
 * ubique.irr([74.2,37.1,-104.4],[0,14,31],31);
 * // -0.07271456460699813
 */
 $u.irr = function(cf,cfd,cd,guess) {
   if (arguments.length < 1) {
    throw new Error('not enough input arguments');
  }
  var _npv = function(cf,cfd,cd,guess) {
    var npv = 0;
    for (var i = 0;i < cf.length;i++) {
      npv += cf[i] / Math.pow((1 + guess),cfd[i]/cd);
    }
    return npv;
  }
  var _npvd = function(cf,cfd,cd,guess) {
    var npv = 0;
    for (var i = 0;i < cf.length;i++) {
      npv -= cfd[i]/cd * cf[i] / Math.pow((1 + guess),cfd[i]/cd)
    }
    return npv;
  }
  if (arguments.length === 1) {
    cfd = $u.colon(0,cf.length-1,1);
    cd = 1;
    guess = 0.1;
  }
  if (arguments.length === 2) {
    cd = 1;
    guess = 0.1;
  }
  if (arguments.length === 3) {
    guess = 0.1;
  }
  var rate = guess,
  maxeps = 1e-6,
  maxiter = 50,
  newrate = 0,
  epsrate = 0,
  npv = 0,
  cnt = 0,
  cntv = true;
  do {
    npv = _npv(cf,cfd,cd,rate);
    newrate = rate - npv / _npvd(cf,cfd,cd,rate);
    epsrate = Math.abs(newrate - rate);
    rate = newrate;
    cntv = (epsrate > maxeps) && (Math.abs(npv) > maxeps);
  } while (cntv && (cnt++ < maxiter));
  if (cntv) {
    throw new Error('number error');
  }
  return rate;
}

}