## Contents

### Arithmetic Operations

- [ceil](/doc/elemop/ceil.md) - Round toward positive infinity
- [cumdev](/doc/elemop/cumdev.md) - Cumulative mean deviation
- [cummax](/doc/elemop/cummax.md) - Cumulative max of array elements
- [cummin](/doc/elemop/cummin.md) - Cumulative min of array elements
- [cumprod](/doc/elemop/cumprod.md) - Cumulative product of array elements
- [cumsum](/doc/elemop/cumsum.md) - Cumulative sum of array elements
- [diff](/doc/elemop/diff.md) - Differences between adjacent elements in array
- [dot](/doc/elemop/dot.md) - Arrays dot product X * Y
- [fix](/doc/matarrs/fix.md) - Round toward zero
- [floor](/doc/elemop/floor.md) - Round toward negative infinity
- [ldivide](/doc/elemop/ldivide.md) - Left array division X. \ Y
- [minus](/doc/elemop/minus.md) - Subtraction X - Y
- [mldivide](/doc/elemop/mldivide.md) - Matrix division X \ Y
- [mod](/doc/elemop/mod.md) - Modulus after division
- [mpower](/doc/elemop/mpower.md) - Matrix power X ^ Y
- [mrdivide](/doc/elemop/mrdivide.md) - Matrix division X / Y
- [mtimes](/doc/elemop/mtimes.md) - Matrix multiplication X * Y
- [plus](/doc/elemop/plus.md) - Addition X + Y
- [power](/doc/elemop/power.md) - Element-wise power X. ^ Y
- [prod](/doc/elemop/prod.md) - Product of array elements
- [rdivide](/doc/elemop/rdivide.md) - Right array division X. / Y
- [rem](/doc/elemop/rem.md) - Remainder after division
- [round](/doc/elemop/round.md) - Round to nearest integer
- [sum](/doc/elemop/sum.md) - Sum of array elements
- [times](/doc/elemop/times.md) - Array multiply X. * Y
- [uminus](/doc/elemop/uminus.md) - Unary minus -X
- [uplus](/doc/elemop/uplus.md) - Unary plus +X

### Array Creation and Concatenation

- [array](/doc/matarrs/array.md) - Create an array with custom elements
- [cat](/doc/matarrs/cat.md) - Concatenate arrays and matrices
- [clone](/doc/matarrs/clone.md) - Create a clone of the input array or matrix
- [diag](/doc/matarrs/diag.md) - Diagonal matrix and get diagonals of a matrix
- [eye](/doc/matarrs/eye.md) - Identity matrix
- [falses](/doc/matarrs/falses.md) - Create array of all false
- [horzcat](/doc/matarrs/horzcat.md) - Concatenate arrays or matrices horizontally
- [isarray](/doc/datatype/isarray.md) - True for array
- [linspace](/doc/matarrs/linspace.md) - Create linearly spaced arrays
- [logspace](/doc/matarrs/logspace.md) - Create logarithmically spaced arrays
- [matrix](/doc/matarrs/matrix.md) - Create a matrix object
- [ones](/doc/matarrs/ones.md) - Create array of all ones
- [rand](/doc/matarrs/rand.md) - Uniformly distribuited pseudorandom numbers
- [subset](/doc/matarrs/subset.md) - Subset of array or matrix based on X,Y coordinates
- [substelin](/doc/matarrs/substelin.md) - Subset of array or matrix based on linear indexing
- [tomat](/doc/matarrs/tomat.md) - Convert number or array to matrix
- [trues](/doc/matarrs/trues.md) - Create array of all true
- [vertcat](/doc/matarrs/vertcat.md) - Concatenate arrays or matrices vertically
- [zeros](/doc/matarrs/zeros.md) - Create array or matrix of all zeros

### Array Dimensions

- [iscolumn](/doc/matarrs/iscolumn.md) - True for column vector
- [isempty](/doc/datatype/isempty.md) - True for empty array or matrix
- [ismatrix](/doc/datatype/ismatrix.md) - True for matrix
- [isrow](/doc/matarrs/isrow.md) - True for row vector
- [isscalar](/doc/datatype/isscalar.md) - True for scalar input
- [issquare](/doc/matarrs/issquare.md) - True for square matrix
- [isvector](/doc/datatype/isvector.md) - True for vector input
- [length](/doc/matarrs/length.md) - length of vector or largest array dimension
- [ncols](/doc/matarrs/ncols.md) - Number of columns in vector|matrix
- [ndims](/doc/matarrs/ndims.md) - Number of array dimensions
- [nrows](/doc/matarrs/nrows.md) - Number of rows in vector|matrix
- [numel](/doc/matarrs/numel.md) - Number of elements in an array
- [size](/doc/matarrs/size.md) - Size of N-D array

### Basic Statistic

- [histc](/doc/stats/histc.md) - Histogram count

### Complex Numbers

- [abs](/doc/elmath/abs.md) - Absolute value
- [sign](/doc/elmath/sign.md) - Signum function

### Create and Concatenate Strings

- [randchar](/doc/datatype/randchar.md) - Generate a random alpha-numeric string

### Data Transformation

- [ret2tick](/doc/quants/ret2tick.md) - Convert a return series to a value series with a start value
- [tick2ret](/doc/quants/tick2ret.md) - Convert a value series to a return series

### Data Type Identification

- [isfunction](/doc/datatype/isfunction.md) - True for function
- [isinteger](/doc/datatype/isinteger.md) - True for integer
- [isnull](/doc/datatype/isnull.md) - True for null values
- [isnumber](/doc/datatype/isnumber.md) - True for number
- [isstring](/doc/datatype/isstring.md) - True for string values
- [isundefined](/doc/datatype/isundefined.md) - True for undefined values

### Datafeed

- [yahoo](/doc/datafeed/yahoo.md) - Download CSV Yahoo Finance historical (async request)
- [yahooSync](/doc/datafeed/yahooSync.md) - Download CSV Yahoo Finance historical (sync request)

### Dates and Time

- [clock](/doc/datatype/clock.md) - Current date and time as date vector
- [datenum](/doc/datatype/datenum.md) - Convert date and time to serial date number (Unix)
- [datestr](/doc/datatype/datestr.md) - Convert serial date number (Unix) to string format
- [datevec](/doc/datatype/datevec.md) - Convert date and time to vector of components
- [month](/doc/datatype/month.md) - Month of date
- [now](/doc/datatype/now.md) - Current date and time as date number (unix)
- [today](/doc/datatype/today.md) - Current date
- [weekday](/doc/datatype/weekday.md) - Day of week

### Descriptive Statistic

- [corrcoef](/doc/stats/corrcoef.md) - Correlation coefficients of two arrays X,Y
- [cov](/doc/stats/cov.md) - Covariance matrix
- [iqr](/doc/stats/iqr.md) - Interquartile range
- [kurtosis](/doc/stats/kurtosis.md) - Kurtosis
- [mad](/doc/stats/mad.md) - Mean absolute deviation
- [max](/doc/stats/max.md) - Largest element in array
- [mean](/doc/stats/mean.md) - Average value of array
- [median](/doc/stats/median.md) - Median value of array
- [min](/doc/stats/min.md) - Smallest element in array
- [mode](/doc/stats/mode.md) - Most frequent value in an array of elements
- [moment](/doc/stats/moment.md) - Central moments
- [prctile](/doc/stats/prctile.md) - Percentiles of a sample
- [quantile](/doc/stats/quantile.md) - Quantilies of a sample
- [quartile](/doc/stats/quartile.md) - Quartilies of a sample
- [range](/doc/stats/range.md) - Range of values
- [skewness](/doc/stats/skewness.md) - Skewness
- [std](/doc/stats/std.md) - Standard deviation
- [varc](/doc/stats/varc.md) - Variance
- [xkurtosis](/doc/stats/xkurtosis.md) - Excess kurtosis
- [zscore](/doc/stats/zscore.md) - Standardized Z score

### Distance metrics

- [pdist](/doc/stats/pdist.md) - Pairwise distance between two sets of observations

### Distribution Tests

- [jbtest](/doc/probdistr/jbtest.md) - Jarque-Bera test

### Exponents and Logarithms

- [exp](/doc/elmath/exp.md) - Exponential value
- [log](/doc/elmath/log.md) - Square root

### Indexing

- [col](/doc/matarrs/col.md) - Get a column of a matrix
- [colon](/doc/matarrs/colon.md) - Array of numbers from L to U with step S
- [end](/doc/matarrs/end.md) - Last index in array or matrix
- [find](/doc/matarrs/find.md) - Find indices of nonzero elements
- [ind2sub](/doc/matarrs/ind2sub.md) - Multiple subscripts from linear index
- [row](/doc/matarrs/row.md) - Get a row of matrix
- [sub2ind](/doc/matarrs/sub2ind.md) - Subscripts to linear indices

### Interpolation

- [interp1](/doc/reglin/interp1.md) - Linear interpolation

### Linear Equations

- [inv](/doc/linalgebra/inv.md) - Matrix inverse
- [linsolve](/doc/linalgebra/linsolve.md) - Solve linear system of equations Ax = b

### Linear Regression

- [linearreg](/doc/reglin/linearreg.md) - Linear regression of Y on X

### Logical Operations

- [islogical](/doc/datatype/islogical.md) - True for logical input

### Matrix Analysis

- [det](/doc/linalgebra/det.md) - Matrix determinant

### Matrix Decomposition

- [lu](/doc/linalgebra/lu.md) - LU matrix factorization

### Matrix Types

- [issingular](/doc/datatype/issingular.md) - True for singular matrix

### Normal Distributions

- [normcdf](/doc/probdistr/normcdf.md) - Normal cumulative distribution function (cdf)
- [norminv](/doc/probdistr/norminv.md) - Inverse of the normal cumulative distribution function (cdf)
- [normpdf](/doc/probdistr/normpdf.md) - Normal probability density function (pdf)

### Numeric Types

- [nan](/doc/datatype/nan.md) - Create array of all NaN

### Parse Strings

- [strfind](/doc/datatype/strfind.md) - Find one string within another

### Performance metrics

- [activereturn](/doc/quants/activereturn.md) - Active return
- [annreturn](/doc/quants/annreturn.md) - Annualized Return
- [cagr](/doc/quants/cagr.md) - Compound annual growth rate
- [irr](/doc/quants/irr.md) - Internal rate of return on an investment based on a series of periodic cash flows
- [mdietz](/doc/quants/mdietz.md) - Historical performance of an investment portfolio with external cash flows
- [percpos](/doc/quants/percpos.md) - Percentage of positive values in array or matrix
- [ror](/doc/quants/ror.md) - Simple rate of return
- [twr](/doc/quants/twr.md) - True Time-weighted return measures the returns of the assets irrespective of the amount invested

### Relational Operations

- [eq](/doc/elemop/eq.md) - Equality X === Y
- [ge](/doc/elemop/ge.md) - Greater than or equal to X >= Y
- [gt](/doc/elemop/gt.md) - Greater than X > Y
- [le](/doc/elemop/le.md) - Less than or equal to X <= Y
- [lt](/doc/elemop/lt.md) - Less than X < Y
- [ne](/doc/elemop/ne.md) - Inequality X !== Y

### Risk metrics

- [adjsharpe](/doc/quants/adjsharpe.md) - Adjusted Sharpe Ratio
- [annadjsharpe](/doc/quants/annadjsharpe.md) - Annualized Adjusted Sharpe Ratio
- [annrisk](/doc/quants/annrisk.md) - Annualized Risk
- [avgdrawdown](/doc/quants/avgdrawdown.md) - Average drawdown
- [burkeratio](/doc/quants/burkeratio.md) - Burke Ratio
- [calmarratio](/doc/quants/calmarratio.md) - Calmar Ratio
- [cdrawdown](/doc/quants/cdrawdown.md) - Continuous Drawdown
- [downsidepot](/doc/quants/downsidepot.md) - Downside potential
- [downsiderisk](/doc/quants/downsiderisk.md) - Downside Risk
- [drawdown](/doc/quants/drawdown.md) - Drawdown
- [histcondvar](/doc/quants/histcondvar.md) - Historical Conditional Value-At-Risk
- [histvar](/doc/quants/histvar.md) - Historical Value-At-Risk
- [inforatio](/doc/quants/inforatio.md) - Information Ratio
- [jensenalpha](/doc/quants/jensenalpha.md) - Jensen alpha
- [m2sortino](/doc/quants/m2sortino.md) - M-squared for Sortino
- [martinratio](/doc/quants/martinratio.md) - Martin Ratio
- [modigliani](/doc/quants/modigliani.md) - Modigliani index for risk-adjusted return
- [montecarlovar](/doc/quants/montecarlovar.md) - Montecarlo Value-at-Risk
- [omegaratio](/doc/quants/omegaratio.md) - Omega ratio
- [painindex](/doc/quants/painindex.md) - Pain Index
- [painratio](/doc/quants/painratio.md) - Pain Ratio
- [paramcondvar](/doc/quants/paramcondvar.md) - Parametric Conditional Value-At-Risk
- [paramvar](/doc/quants/paramvar.md) - Parametric Value-At-Risk
- [sharpe](/doc/quants/sharpe.md) - Sharpe Ratio
- [sortino](/doc/quants/sortino.md) - Sortino ratio
- [sterlingratio](/doc/quants/sterlingratio.md) - Sterling Ratio
- [trackerr](/doc/quants/trackerr.md) - Tracking Error (ex-post)
- [treynor](/doc/quants/treynor.md) - Treynor Ratio
- [ulcerindex](/doc/quants/ulcerindex.md) - Ulcer Index
- [upsidepot](/doc/quants/upsidepot.md) - Upside potential

### Set Operations

- [unique](/doc/elemop/unique.md) - Unique values in array or matrix

### Sorting and Reshaping Arrays

- [flatten](/doc/matarrs/flatten.md) - Flatten a matrix
- [flipdim](/doc/matarrs/flipdim.md) - Flip order of elements in array or matrix
- [fliplr](/doc/matarrs/fliplr.md) - Flip matrix left to right
- [flipud](/doc/matarrs/flipud.md) - Flip matrix up to down
- [mergesort](/doc/matarrs/mergesort.md) - Sort array in ascending/descending order
- [repmat](/doc/matarrs/repmat.md) - Replicate and tile array
- [reshape](/doc/matarrs/reshape.md) - Reshape array or matrix with custom values
- [sort](/doc/matarrs/sort.md) - Sort array elements in ascending/descending order
- [squeeze](/doc/matarrs/squeeze.md) - Remove singleton dimensions from N-D arrays (matrices)
- [transpose](/doc/matarrs/transpose.md) - Transpose X.'

### Special Functions

- [erf](/doc/elmath/erf.md) - Error function
- [erfc](/doc/elmath/erfc.md) - Complementary error function
- [erfcinv](/doc/elmath/erfcinv.md) - Inverse complementary error function
- [erfinv](/doc/elmath/erfinv.md) - Inverse error function

### Structures

- [arrayfun](/doc/datatype/arrayfun.md) - Apply function to each element of array or matrix
- [vectorfun](/doc/datatype/vectorfun.md) - Apply a function to each vector column or row of a matrix

### Time Series Analysis

- [hurst](/doc/quants/hurst.md) - Hurst index/exponent
- [tomonthly](/doc/quants/tomonthly.md) - Convert a time series to a monthly frequency
- [toweekly](/doc/quants/toweekly.md) - Convert a time series to a weekly frequency

### Utility

- [format](/doc/util/format.md) - Set display format for output (numbers)
