![Ubique](http://maxto.github.io/ubique-logo.jpg)

# Ubique
http://maxto.github.io/

[![Travis Build Status](https://travis-ci.org/maxto/ubique.svg?style=flat)](https://travis-ci.org/maxto/ubique)
[![NPM version](http://img.shields.io/npm/v/ubique.svg?style=flat)](https://www.npmjs.com/package/ubique)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg?style=flat)](http://bower.io/search/?q=ubique)

An extensive scientific computing library for JavaScript and Node.js/Io.js
 
Ubique supports arrays, vectors and matrices, providing MATLAB-like functionalities. It includes functions for quantitative analysis and advanced statistics. 

Easy to use, Ubique runs both in Node.js/Io.js and in the Browser.

You can use directly in the browser console from the Website pages [Ubique](http://maxto.github.io/)

For further details see the [API Documentation](/doc/contents.md)

## Key Features

- Numerical computations in pure Javascript
- Vectors and Matrices manipulation
- Mathematical functions for elementary operations, linear algebra, statistics, time series analysis and computational finance
- Browser compatibility ECMAScript 5
- Server-side development with Node.js/Io.js
- Easily extensible with user-defines functions or libraries
- API documentation and Tutorials
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

// Concatenate X,Y and Z along columns
var xyz = ubique.cat(1,x,y,z);

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
  NumColumns:     ubique.ncols(W), // numnber of columns
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

// Get some financial metrics

var myFinMetrics = {

  annualizedReturn: ubique.annreturn(xy),
  excessReturn: ubique.activereturn(x,y),
  sharpe: ubique.sharpe(xy),
  sortino: ubique.sortino(xy),
  annualizedRisk: ubique.annrisk(xy),
  downsideRisk: ubique.downsiderisk(xy),
  maxdrawdown: [ubique.drawdown(x).maxdd,ubique.drawdown(y).maxdd],
  ulcerindex: ubique.ulcerindex(xy),
  hurst: ubique.hurst(xy),

};

// {
// annualizedReturn: [ [ 86.43, 22.46 ] ],
// excessReturn: 0.0052,
// sharpe: [ [ 0.77, 0.23 ] ],
// sortino: [ [ 3.40, 0.44 ] ],
// annualizedRisk: [ [ 0.36, 0.83 ] ],
// downsideRisk: [ [ 0.005, 0.028 ] ],
// maxdrawdown: [ 1.346, 1.753 ],
// ulcerindex: [ [ 0.634, 0.991 ] ],
// hurst: [ [ 0.344, 0.515 ] ]
// }
```

## For MATLAB Users

Ubique doesn't clone MATLAB, it mimics some functionalities and applications in the matrix environment. Ubique is not a language, but a natural Javascript library.

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







