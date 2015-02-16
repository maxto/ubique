# Ubique
[![Travis Build Status](https://travis-ci.org/maxto/ubique.svg?style=flat)](https://travis-ci.org/maxto/ubique)
[![NPM version](http://img.shields.io/npm/v/ubique.svg?style=flat)](https://www.npmjs.com/package/ubique)
[![Bower](https://img.shields.io/bower/v/bootstrap.svg?style=flat)](http://bower.io/search/?q=ubique)

A mathematical and statistical library for JavaScript and Node.js http://maxto.github.io/
 
Ubique supports arrays, vectors and matrices, providing MATLAB-like functionalities.
It includes a toolkit of functions for quantitative analysis and advanced statistics. 

Easy to use, no dependencies. Runs both in Node.js and in the Browser.

## Features

- Matrices and Arrays: matrix creation and concatenation, indexing, sorting and reshaping
- Elementary Operations: sum, subtract, multiply, divide arrays and matrices 
- Elementary Math: errof function, exponent and logarithm, signum and absolute value
- Linear Algebra: determinant, inverse matrix, linear solver, LU-decomposition
- Descriptive Statistics: mean,standard deviation, kurtosis, skewness, percentile, zscore
- Probability Distributions: normal pdf and cdf, inverse, distribution test
- Interpolation and Regression Analysis
- Quantitative Analysis: performance and risk metrics

## Ubique for MATLAB Users

See some comparative [Code](/doc/formatlabusers.md)

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

- Using [Npm](https://www.npmjs.org)

```
npm install ubique
```

- Using [Bower](http://bower.io/)


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

The MIT License (MIT)

Copyright 2014-2015 Max Todaro

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







