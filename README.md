![Ubique](http://maxto.github.io/ubique-logo.jpg)


# Ubique 0.5.1 (See [ChangeLog](CHANGELOG.md))

## I cannot develop this lib in js anymore, but I added the js files to attach functions to main class ubique in the folder [Builder](/builder/)

- gulpile.js: create bundle, minification and docs
- compiler.js: load all functions attaching on main class ubique
- docgen.js: generate document object based on js filename and folder

==============================================================================================

[![Travis Build Status](https://travis-ci.org/maxto/ubique.svg?style=flat)](https://travis-ci.org/maxto/ubique)
[![NPM version](http://img.shields.io/npm/v/ubique.svg?style=flat)](https://www.npmjs.com/package/ubique)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg?style=flat)](http://bower.io/search/?q=ubique)

A mathematical and quantitative library for Javascript and Node.js.

Ubique supports vectors and matrices, providing a lot of functionalities for elementary operations, linear algebra, statistics, time series analysis and computational finance.

Easy to use, Ubique runs both in Node.js/Io.js and in the Browser.

You can use directly in the browser console from the Website pages [Ubique](http://maxto.github.io/)

For further details see the [API Documentation](/doc/contents.md)

## Key Features

- Numerical computations in pure Javascript
- Vectors and Matrices manipulation
- Browser compatibility ECMAScript 5
- Server-side development with Node.js/Io.js
- Easily extensible with user-defines functions or libraries
- API documentation
- Free and Open Source (MIT License)

## Usage

```js
// Load Ubique
var ubique = require('ubique');

// EXAMPLE 1 - BASIC STATISTICS

// set variables
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];

// Concatenate X,Y and Z along columns, returns a matrix W with size 10x3
var W = ubique.cat(1,x,y,z);

// [ [ 0.003, -0.005, 0.04 ],
//   [ 0.026, 0.081, -0.022 ],
//   [ 0.015, 0.04, 0.043 ],
//   [ -0.009, -0.037, 0.028 ],
//   [ 0.014, -0.061, -0.078 ],
//   [ 0.024, 0.058, -0.011 ],
//   [ 0.015, -0.049, 0.033 ],
//   [ 0.066, -0.021, -0.049 ],
//   [ -0.014, 0.062, 0.09 ],
//   [ 0.039, 0.058, 0.087 ] ]

// Get statistics for matrix W along column (default)

var myStats = {

  ArrayDimension: ubique.size(W), // size of the matrix
  NumRows:        ubique.nrows(W), // number of rows
  NumColumns:     ubique.ncols(W), // number of columns
  Mean:           ubique.mean(W), // average value for columns
  StandardDev:    ubique.std(W), // standard deviation (sample)
  Variance:       ubique.varc(W), // variance
  Mode:           ubique.mode(W), // mode
  Median:         ubique.median(W), // median
  Max:            ubique.max(W), // max
  Min:            ubique.min(W), //  min
  Kurtosis:       ubique.kurtosis(W), // kurtosis
  Skewness:       ubique.skewness(W), // skewness
  Interquartile:  ubique.iqr(W), //interquartile range
  MeanAbsDev:     ubique.mad(W), // mean absolute deviation
  Range:          ubique.range(W), // range
  Moment:         ubique.moment(W,2), // second moment
  Percentile:     ubique.prctile(W,5), // 5-th percentile
  Quantile:       ubique.quantile(W,0.05), // quantile at 5%
  Quartile:       ubique.quartile(W), // quartile
  ExcessKurtosis: ubique.xkurtosis(W), //excess kurtosis
  Zscore:         ubique.zscore(W) // Z-score

}

//  { ArrayDimension: [ 10, 3 ],
//    NumRows: 10,
//    NumColumns: 3,
//    Mean: [ [ 0.0179, 0.0126, 0.0161 ] ],
//    StandardDev: [ [ 0.02323, 0.052812, 0.055266 ] ],
//    Variance: [ [ 0.00054, 0.002789, 0.003054 ] ],
//    Mode: [ [ 0.015, 0.058, -0.078 ] ],
//    Median: [ [ -0.0115, -0.055, -0.0635 ] ],
//    Max: [ [ 0.066, 0.081, 0.09 ] ],
//    Min: [ [ -0.014, -0.061, -0.078 ] ],
//    Kurtosis: [ [ 3.037581, 1.397642, 2.052037 ] ],
//    Skewness: [ [ 0.617481, -0.118909, -0.266942 ] ],
//    Interquartile: [ [ 0.023, 0.095, 0.065 ] ],
//    MeanAbsDev: [ [ 0.01668, 0.0472, 0.04488 ] ],
//    Range: [ [ 0.08, 0.142, 0.168 ] ],
//    Moment: [ [ 0.000486, 0.00251, 0.002749 ] ],
//    Percentile: [ [ -0.014, -0.061, -0.078 ] ],
//    Quantile: [ [ -0.014, -0.061, -0.078 ] ],
//    Quartile: 
//    [ [ 0.003, -0.037, -0.022 ],
//      [ 0.015, 0.0175, 0.0305 ],
//      [ 0.026, 0.058, 0.043 ] ],
//    ExcessKurtosis: [ [ 0.037581, -1.602358, -0.947963 ] ],
//    Zscore: 
//    [ [ -0.641399, -0.333255, 0.432455 ],
//      [ 0.34868, 1.295149, -0.689394 ],
//      [ -0.124836, 0.518817, 0.486738 ],
//      [ -1.157961, -0.939172, 0.215323 ],
//      [ -0.167883, -1.393611, -1.702677 ],
//      [ 0.262586, 0.859646, -0.490356 ],
//      [ -0.124836, -1.166391, 0.305794 ],
//      [ 2.070555, -0.636214, -1.177941 ],
//      [ -1.373195, 0.935385, 1.337171 ],
//      [ 0.908289, 0.859646, 1.282888 ] ] }


// EXMPLE 2 - QUANTITATIVE METRICS FOR FINANCE

var mean = ubique.mean,
std = ubique.std,
cat = ubique.cat;

var myFinMetrics = {

  ActiveReturn:        ubique.activereturn(W,z), // active or excess return ober Z
  AnnualizedReturn:    ubique.annreturn(W,12), // annualized return (monthly)
  Cagr:                ubique.cagr(W,10/12), // compound annual growth rate
  Percpos:             ubique.percpos(W), // percentage of positive values
  Ror:                 ubique.ror(W),// simple rate of return
  AdjSharpeRatio:      ubique.adjsharpe(W), // adjusted sharpe ratio
  AnnuaAdjSharpeRatio: ubique.annadjsharpe(W,0,12), // annualized sharpe ratio
  AnnualizedRisk:      ubique.annrisk(W), // annualized risk
  AverageDrawdown:     ubique.avgdrawdown(W), // average drawdown
  ContinuousDrawdow:   ubique.cdrawdown(W), // continuous drawdown
  Drawdown:            ubique.drawdown(x), // drawdown, maxdrawdown, recovery period
  BurkeRatio:          ubique.burkeratio(W), // burke ratio
  CalmarRatio:         ubique.calmarratio(W), // calmar ratio
  InformationRatio:    ubique.inforatio(cat(1,x,y),z), // information ratio
  JensenAlpha:         ubique.jensenalpha(cat(1,x,y),z), // jensen-Alpha
  M2Sortino:           ubique.m2sortino(cat(1,x,y),z), // m2-Sortino
  MartinRatio:         ubique.martinratio(W), // martin ratio
  Modigliani:          ubique.modigliani(cat(1,x,y),z), // modigliani
  OmegaRatio:          ubique.omegaratio(W), // omega ratio
  PainIndex:           ubique.painindex(W), // pain index
  PainRatio:           ubique.painratio(W), // pain ratio
  SharpeRatio:         ubique.sharpe(W), // sharpe ratio
  Sortino:             ubique.sortino(W), // sortino
  SterlingRatio:       ubique.sterlingratio(W), // sterling ratio
  TrackingError:       ubique.trackerr(x,z), // tracking error
  TreynorRatio:        ubique.treynor(x,z), // treynor ratio
  UlcerIndex:          ubique.ulcerindex(W), // ulcer index
  UpsidePotential:     ubique.upsidepot(W), // upside potential
  HistoricalVaR:       ubique.histvar(W), // historical VaR
  ParametricVaR:       ubique.paramvar(mean(W),std(W)), // parametric VaR
  MontecarloVaR:       ubique.montecarlovar(x), // montecarlo VaR
  HistConditionalVaR:  ubique.histcondvar(W,0.95), // historical conditional VaR 
  ParamConditionalVaR: ubique.paramcondvar(mean(W),std(W)), // param conditional VaR

}

//  { ActiveReturn: [ [ 42.60025, -22.656613, 0 ] ],
//  AnnualizedReturn: [ [ 0.233815, 0.14509, 0.191836 ] ],
//  Cagr: [ [ 0.229388, 0.151999, 0.137042 ] ],
//  Percpos: [ [ 0.8, 0.5, 0.6 ] ],
//  Ror: [ [ 0.187793, 0.125149, 0.112962 ] ],
//  AdjSharpeRatio: [ [ 0.830583, 0.245232, 0.293754 ] ],
//  AnnualizedAdjSharpeRatio: [ [ 3.766555, 0.827757, 0.99698 ] ],
//  AnnualizedRisk: [ [ 0.368773, 0.838372, 0.877319 ] ],
//  AverageDrawdown: [ [ 0.0115, 0.056571, 0.053047 ] ],
//  ContinuousDrawdow: [ [ 0.009, 0.005, 0.022 ], [ 0.014, 0.095743, 0.088142 ] ],
//  Drawdown: 
//   { dd: [ 0, 0, 0, 0.009, 0, 0, 0, 0, 0.01399, 0 ],
//     ddrecov: [ 0, 0, 0, 4, 0, 0, 0, 0, 9, 0 ],
//     maxdd: 0.01399,
//     maxddrecov: [ 8, 9 ] },
//  BurkeRatio: [ [ 4894.517302, 137.201479, 376.491017 ] ],
//  CalmarRatio: [ [ 5818.643065, 148.279682, 372.92169 ] ],
//  InformationRatio: [ [ 0.026302, -0.059705 ] ],
//  JensenAlpha: [ [ 0.020772, 0.006256 ] ],
//  M2Sortino: [ [ 82.804628, 16.217907 ] ],
//  MartinRatio: [ [ 15477.822721, 272.324501, 720.112099 ] ],
//  Modigliani: [ [ 0.042585, 0.013185 ] ],
//  OmegaRatio: [ [ 8.782609, 1.728324, 2.00625 ] ],
//  PainIndex: [ [ 0.0023, 0.042955, 0.037398 ] ],
//  PainRatio: [ [ 35417.827351, 377.234425, 1039.102998 ] ],
//  SharpeRatio: [ [ 0.770539, 0.23858, 0.291319 ] ],
//  Sortino: [ [ 3.401051, 0.446679, 0.534003 ] ],
//  SterlingRatio: [ [ 5818.643065, 169.246211, 440.888034 ] ],
//  TrackingError: 0.068436,
//  TreynorRatio: -0.100359,
//  UlcerIndex: [ [ 0.005263, 0.059503, 0.053965 ] ],
//  UpsidePotential: [ [ 0.0202, 0.0299, 0.0321 ] ],
//  HistoricalVaR: [ [ 0.014, 0.061, 0.078 ] ],
//  ParametricVaR: [ [ 0.020311, 0.074269, 0.074804 ] ],
//  MontecarloVaR: 0.075047,
//  HistoricalConditionalVaR: [ [ 0.014, 0.061, 0.078 ] ],
//  ParametricConditionalVaR: [ 0.030018, 0.096337, 0.097898 ] }

// EXAMPLE 3 - ARRAY, VECTOR AND MATRIX

var A = [[5,6,5],[7,8,-1]],
B = [[-1,3,-1],[4,5,9]],
C = [5,6,3],
D = [[1,1,-1],[1,-2,3],[2,3,1]],
E = [[3, 2], [5, 2]];

var myData = {

  sizeA:     ubique.size(A), // 2x3 matrix
  sizeB:     ubique.size(B), // 2x3 matrix
  sizeC:     ubique.size(C), // 3x1 vector (= array)
  sizeD:     ubique.size(D), // 3x3 matrix
  sizeE:     ubique.size(E), // 2x2 matrix

  'A+B':     ubique.plus(A,B), // A + B -> 2x3 matrix
  'A-B':     ubique.minus(A,B), // A - B -> 2x3 matrix
  'A.*B':    ubique.times(A,B), // A * B element-wise -> 2x3 matrix
  'A*C':     ubique.mtimes(A,C), // A * C -> 2x1 vector
  'A./B':    ubique.rdivide(A,B), // A / B element-wise -> 2x3 matrix
  'A/D':     ubique.mrdivide(A,D), // A / D -> 2x3 matrix
  'A.\\B':   ubique.ldivide(A,B), // A \ B element-wise -> 2x3 matrix
  'E\\B':    ubique.mldivide(E,B), // A \ E -> 2x2 matrix 
  'det(D)':  ubique.det(D), // determinant -> 1x1 array
  'inv(D)':  ubique.inv(D), // inverse -> 3x3 matrix
  'Dx=C':    ubique.linsolve(D,C), // linear solver -> 3x1 vector

   reshapeD: ubique.reshape(D,1,9), // reshape matrix -> 1x9 vector
   repmatC:  ubique.repmat(C,1,4), // replicate matrix -> 3x4 matrix
   matrixX:  ubique.matrix(2,4,NaN), // new matrix -> 2x4 matrix
   zerosX:   ubique.zeros(2,4), // zeros matrix-> 2x4 matrix
   eyeX:     ubique.eye(2), // identity matrix -> 2x2 matrix
   
}

//  { sizeA: [ 2, 3 ],
//  sizeB: [ 2, 3 ],
//  sizeC: [ 3, 1 ],
//  sizeD: [ 3, 3 ],
//  sizeE: [ 2, 2 ],
//  'A+B': [ [ 4, 9, 4 ], [ 11, 13, 8 ] ],
//  'A-B': [ [ 6, 3, 6 ], [ 3, 3, -10 ] ],
//  'A.*B': [ [ -5, 18, -5 ], [ 28, 40, -9 ] ],
//  'A*C': [ [ 76 ], [ 80 ] ],
//  'A./B': [ [ -5, 2, -5 ], [ 1.75, 1.6, -0.111111 ] ],
//  'A/D': 
//   [ [ -0.769231, 0.538462, 2.615385 ],
//     [ 3.384615, 0.230769, 1.692308 ] ],
//  'A.\B': [ [ -0.2, 0.5, -0.2 ], [ 0.571429, 0.625, -9 ] ],
//  'E\B': [ [ 2.5, 1, 5 ], [ -4.25, 0, -8 ] ],
//  'det(D)': -13,
//  'inv(D)': 
//   [ [ 0.846154, 0.307692, -0.076923 ],
//     [ -0.384615, -0.230769, 0.307692 ],
//     [ -0.538462, 0.076923, 0.230769 ] ],
//  'Dx=C': [ 5.846154, -2.384615, -1.538462 ],
//  reshapeD: [ [ 1, 1, 2, 1, -2, 3, -1, 3, 1 ] ],
//  repmatC: [ [ 5, 5, 5, 5 ], [ 6, 6, 6, 6 ], [ 3, 3, 3, 3 ] ],
//  matrixX: [ [ NaN, NaN, NaN, NaN ], [ NaN, NaN, NaN, NaN ] ],
//  zerosX: [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ],
//  eyeX: [ [ 1, 0 ], [ 0, 1 ] ] }

// EXAMPLE 4 - RETRIEVE FINANCIAL TIMESERIES FROM FREE RESOURCES

// Yahoo Historical Data (Async mode)
var options = {
'symbol': 'AAPL',
'from': '2015-01-01',
'to': '2015-05-01',
'period': 'd',
'fmt': 'YYYY-MM-DD'};

 ubique.yahoo.historical(options,function(err,data){
 // console.log(data)
 });

```

## For MATLAB Users

Ubique mimics some basic MATLAB functionalities and applications in the matrix environment.

For some comparative code see [For Matlab Users](/doc/formatlabusers.md)

## Install

- Cloning repo from [Github](https://github.com/)

```
git clone git://github.com/maxto/ubique.git

cd ubique
```

Download the project dependencies:

```
npm install
```

To update main class constructor ubique.js, bundled and minified versions in `./dist` folder:

```
npm run build
```

- Using [Npm](https://www.npmjs.com/package/ubique)

```
npm install ubique
```

- Using [Bower](http://bower.io/search/?q=ubique)


```
bower install ubique
```

## Browser Bundle

Ubique can be used in the browser with bundled and minified version in `./dist` folder.

Example:

```html
	<script src="ubique.min.js" type="text/javascript"></script>
```

## Test

To perform a test execute:

```
npm test
```

## ChangeLog

View [ChangeLog](CHANGELOG.md) 

## License

The MIT License 

Copyright© 2014-2015 Max Todaro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.







