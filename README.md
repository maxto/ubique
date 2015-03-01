![Ubique](http://maxto.github.io/ubiquelogo.jpeg)

# Ubique
http://maxto.github.io/

[![Travis Build Status](https://travis-ci.org/maxto/ubique.svg?style=flat)](https://travis-ci.org/maxto/ubique)
[![NPM version](http://img.shields.io/npm/v/ubique.svg?style=flat)](https://www.npmjs.com/package/ubique)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg?style=flat)](http://bower.io/search/?q=ubique)

An extensive scientific computing library for JavaScript and Node.js/Io.js
 
Ubique supports arrays, vectors and matrices, providing MATLAB-like functionalities. It includes functions for quantitative analysis and advanced statistics. 

Easy to use, Ubique runs both in Node.js/Io.js and in the Browser.

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
// load ubique
var ubique = require('ubique');

// set variables
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

// concatenate X and Y along column
var xy = ubique.cat(1,x,y);

// [ [ 0.003, -0.005 ],
//   [ 0.026, 0.081 ],
//   [ 0.015, 0.04 ],
//   [ -0.009, -0.037 ],
//   [ 0.014, -0.061 ],
//   [ 0.024, 0.058 ],
//   [ 0.015, -0.049 ],
//   [ 0.066, -0.021 ],
//   [ -0.014, 0.062 ],
//   [ 0.039, 0.058 ] ]

// get some descriptive statistics for X and Y along colum
var descStat = {
  numel: ubique.nrows(xy),
  mean: ubique.mean(xy),
  stdev: ubique.std(xy),
  variance: ubique.varc(xy),
  max: ubique.max(xy),
  min: ubique.min(xy),
  mode: ubique.mode(xy),
  median: ubique.median(xy),
  iqr: ubique.iqr(xy),
  kurtosis: ubique.kurtosis(xy),
  skewness: ubique.skewness(xy),
  pdist: ubique.pdist(x,y,'euclidean'),
  sum: ubique.sum(xy),
  alpha: ubique.linearreg(x,y).alpha,
  beta: ubique.linearreg(x,y).beta,
  r2: ubique.linearreg(x,y).rsq
};

// {
// numel: 10,
// mean: [ [ 0.0179, 0.012599999999999997 ] ],
// stdev: [ [ 0.023230487630602065, 0.052812456443111555 ] ],
// variance: [ [ 0.0005396555555555555, 0.0027891555555555553 ] ],
// max: [ [ 0.066, 0.081 ] ],
// min: [ [ -0.014, -0.061 ] ],
// mode: [ [ 0.015, 0.058 ] ],
// median: [ [ -0.0115, -0.055 ] ],
// iqr: [ [ 0.023, 0.095 ] ],
// kurtosis: [ [ 3.0375811348880486, 1.397642467111859 ] ],
// skewness: [ [ 0.6174813132481229, -0.11890905913946115 ] ],
// pdist: 0.17053152201279387,
// sum: [ [ 0.179, 0.12599999999999997 ] ],
// alpha: 0.017609073236025237,
// beta: 0.02308942571228251,
// r2: 0.0027553853574994254
// }

// get some financial metrics
finMetrics = {
  annualizedReturn: ubique.annavgreturn(xy),
  excessReturn: ubique.xreturn(x,y),
  sharpe: ubique.sharpe(xy),
  sortino: ubique.sortino(xy),
  annualizedRisk: ubique.annavgrisk(xy),
  downsideRisk: ubique.downsiderisk(xy),
  maxdrawdown: [ubique.drawdown(x).maxdd,ubique.drawdown(y).maxdd],
  ulcerindex: ubique.ulcerindex(xy),
  hurst: ubique.hurst(xy),
};

// {
// annualizedReturn: [ [ 86.43570576295313, 22.461545039671048 ] ],
// excessReturn: 0.005299999999999999,
// sharpe: [ [ 0.7705391416932597, 0.2385800784247263 ] ],
// sortino: [ [ 3.4010510161478655, 0.4466793403301668 ] ],
// annualizedRisk: [ [ 0.368772558632011, 0.838371755249424 ] ],
// downsideRisk: [ [ 0.0052630789467763076, 0.028208154849263006 ] ],
// maxdrawdown: [ 1.346153846153846, 1.7530864197530867 ],
// ulcerindex: [ [ 0.6344798231002222, 0.9914433491870109 ] ],
// hurst: [ [ 0.3440590389509703, 0.5153097350177327 ] ]
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







