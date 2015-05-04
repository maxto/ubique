/**
 * name: ubique
 * version: 0.2.0
 * update date: 2015-05-05
 * 
 * author: Max Todaro <m.todaro.ge@gmail.com>
 * homepage: http://maxto.github.io/index.html
 * 
 * description: An extensive scientific library for JavaScript and Node.js
 * 
 *
 * The MIT License (MIT)
 * 
 * Copyright© 2014-2015 Max Todaro
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var ubique = {};
require('./constants.js')(ubique);
require('./extlib.js')(ubique);
require('./datatype/arrayfun.js')(ubique);
require('./datatype/clock.js')(ubique);
require('./datatype/datavec.js')(ubique);
require('./datatype/datenum.js')(ubique);
require('./datatype/datestr.js')(ubique);
require('./datatype/isarray.js')(ubique);
require('./datatype/isempty.js')(ubique);
require('./datatype/isfunction.js')(ubique);
require('./datatype/isinteger.js')(ubique);
require('./datatype/islogical.js')(ubique);
require('./datatype/ismatrix.js')(ubique);
require('./datatype/isnull.js')(ubique);
require('./datatype/isnumber.js')(ubique);
require('./datatype/isscalar.js')(ubique);
require('./datatype/issingular.js')(ubique);
require('./datatype/isstring.js')(ubique);
require('./datatype/isundefined.js')(ubique);
require('./datatype/isvector.js')(ubique);
require('./datatype/month.js')(ubique);
require('./datatype/nan.js')(ubique);
require('./datatype/now.js')(ubique);
require('./datatype/randchar.js')(ubique);
require('./datatype/today.js')(ubique);
require('./datatype/vectorfun.js')(ubique);
require('./datatype/weekday.js')(ubique);
require('./elemop/ceil.js')(ubique);
require('./elemop/cumdev.js')(ubique);
require('./elemop/cummax.js')(ubique);
require('./elemop/cummin.js')(ubique);
require('./elemop/cumprod.js')(ubique);
require('./elemop/cumsum.js')(ubique);
require('./elemop/diff.js')(ubique);
require('./elemop/dot.js')(ubique);
require('./elemop/eq.js')(ubique);
require('./elemop/floor.js')(ubique);
require('./elemop/ge.js')(ubique);
require('./elemop/gt.js')(ubique);
require('./elemop/ldivide.js')(ubique);
require('./elemop/le.js')(ubique);
require('./elemop/lt.js')(ubique);
require('./elemop/minus.js')(ubique);
require('./elemop/mldivide.js')(ubique);
require('./elemop/mod.js')(ubique);
require('./elemop/mpower.js')(ubique);
require('./elemop/mrdivide.js')(ubique);
require('./elemop/mtimes.js')(ubique);
require('./elemop/ne.js')(ubique);
require('./elemop/plus.js')(ubique);
require('./elemop/power.js')(ubique);
require('./elemop/prod.js')(ubique);
require('./elemop/rdivide.js')(ubique);
require('./elemop/rem.js')(ubique);
require('./elemop/round.js')(ubique);
require('./elemop/sum.js')(ubique);
require('./elemop/times.js')(ubique);
require('./elemop/uminus.js')(ubique);
require('./elemop/unique.js')(ubique);
require('./elemop/uplus.js')(ubique);
require('./elmath/abs.js')(ubique);
require('./elmath/erf.js')(ubique);
require('./elmath/erfc.js')(ubique);
require('./elmath/erfcinv.js')(ubique);
require('./elmath/erfinv.js')(ubique);
require('./elmath/exp.js')(ubique);
require('./elmath/log.js')(ubique);
require('./elmath/sign.js')(ubique);
require('./elmath/sqrt.js')(ubique);
require('./linalgebra/det.js')(ubique);
require('./linalgebra/inv.js')(ubique);
require('./linalgebra/linsolve.js')(ubique);
require('./linalgebra/lu.js')(ubique);
require('./matarrs/array.js')(ubique);
require('./matarrs/cat.js')(ubique);
require('./matarrs/clone.js')(ubique);
require('./matarrs/col.js')(ubique);
require('./matarrs/colon.js')(ubique);
require('./matarrs/diag.js')(ubique);
require('./matarrs/end.js')(ubique);
require('./matarrs/eye.js')(ubique);
require('./matarrs/falses.js')(ubique);
require('./matarrs/find.js')(ubique);
require('./matarrs/fix.js')(ubique);
require('./matarrs/flatten.js')(ubique);
require('./matarrs/flipdim.js')(ubique);
require('./matarrs/fliplr.js')(ubique);
require('./matarrs/flipud.js')(ubique);
require('./matarrs/horzcat.js')(ubique);
require('./matarrs/ind2sub.js')(ubique);
require('./matarrs/iscolumn.js')(ubique);
require('./matarrs/isrow.js')(ubique);
require('./matarrs/issquare.js')(ubique);
require('./matarrs/length.js')(ubique);
require('./matarrs/linspace.js')(ubique);
require('./matarrs/logspace.js')(ubique);
require('./matarrs/matrix.js')(ubique);
require('./matarrs/mergesort.js')(ubique);
require('./matarrs/ncols.js')(ubique);
require('./matarrs/ndims.js')(ubique);
require('./matarrs/nrows.js')(ubique);
require('./matarrs/numel.js')(ubique);
require('./matarrs/ones.js')(ubique);
require('./matarrs/rand.js')(ubique);
require('./matarrs/repmat.js')(ubique);
require('./matarrs/reshape.js')(ubique);
require('./matarrs/row.js')(ubique);
require('./matarrs/size.js')(ubique);
require('./matarrs/sort.js')(ubique);
require('./matarrs/squeeze.js')(ubique);
require('./matarrs/sub2ind.js')(ubique);
require('./matarrs/subset.js')(ubique);
require('./matarrs/subsetlin.js')(ubique);
require('./matarrs/tomat.js')(ubique);
require('./matarrs/transpose.js')(ubique);
require('./matarrs/trues.js')(ubique);
require('./matarrs/vertcat.js')(ubique);
require('./matarrs/zeros.js')(ubique);
require('./probdistr/jbtest.js')(ubique);
require('./probdistr/normcdf.js')(ubique);
require('./probdistr/norminv.js')(ubique);
require('./probdistr/normpdf.js')(ubique);
require('./quants/activereturn.js')(ubique);
require('./quants/adjsharpe.js')(ubique);
require('./quants/annadjsharpe.js')(ubique);
require('./quants/annreturn.js')(ubique);
require('./quants/annrisk.js')(ubique);
require('./quants/avgdrawdown.js')(ubique);
require('./quants/burkeratio.js')(ubique);
require('./quants/cagr.js')(ubique);
require('./quants/calmarratio.js')(ubique);
require('./quants/cdrawdown.js')(ubique);
require('./quants/downsidepot.js')(ubique);
require('./quants/downsiderisk.js')(ubique);
require('./quants/drawdown.js')(ubique);
require('./quants/histcondvar.js')(ubique);
require('./quants/histvar.js')(ubique);
require('./quants/hurst.js')(ubique);
require('./quants/inforatio.js')(ubique);
require('./quants/irr.js')(ubique);
require('./quants/jensenalpha.js')(ubique);
require('./quants/m2sortino.js')(ubique);
require('./quants/martinratio.js')(ubique);
require('./quants/mdietz.js')(ubique);
require('./quants/modigliani.js')(ubique);
require('./quants/montecarlovar.js')(ubique);
require('./quants/omegaratio.js')(ubique);
require('./quants/painindex.js')(ubique);
require('./quants/painratio.js')(ubique);
require('./quants/paramcondvar.js')(ubique);
require('./quants/paramvar.js')(ubique);
require('./quants/percpos.js')(ubique);
require('./quants/ret2tick.js')(ubique);
require('./quants/ror.js')(ubique);
require('./quants/sharpe.js')(ubique);
require('./quants/sortino.js')(ubique);
require('./quants/sterlingratio.js')(ubique);
require('./quants/tick2ret.js')(ubique);
require('./quants/tomonthly.js')(ubique);
require('./quants/toweekly.js')(ubique);
require('./quants/trackerr.js')(ubique);
require('./quants/treynor.js')(ubique);
require('./quants/twr.js')(ubique);
require('./quants/ulcerindex.js')(ubique);
require('./quants/upsidepot.js')(ubique);
require('./reglin/interp1.js')(ubique);
require('./reglin/linearreg.js')(ubique);
require('./stats/corrcoef.js')(ubique);
require('./stats/cov.js')(ubique);
require('./stats/histc.js')(ubique);
require('./stats/iqr.js')(ubique);
require('./stats/kurtosis.js')(ubique);
require('./stats/mad.js')(ubique);
require('./stats/max.js')(ubique);
require('./stats/mean.js')(ubique);
require('./stats/median.js')(ubique);
require('./stats/min.js')(ubique);
require('./stats/mode.js')(ubique);
require('./stats/moment.js')(ubique);
require('./stats/pdist.js')(ubique);
require('./stats/prctile.js')(ubique);
require('./stats/quantile.js')(ubique);
require('./stats/quartile.js')(ubique);
require('./stats/range.js')(ubique);
require('./stats/skewness.js')(ubique);
require('./stats/std.js')(ubique);
require('./stats/varc.js')(ubique);
require('./stats/xkurtosis.js')(ubique);
require('./stats/zscore.js')(ubique);
require('./util/format.js')(ubique);
require('./datafeed/yahoo.js')(ubique);
module.exports = ubique;