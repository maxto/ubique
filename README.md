[![Travis Build Status](https://travis-ci.org/maxto/ubique.svg?style=flat-square)](https://travis-ci.org/maxto/ubique)
[![NPM version](http://img.shields.io/npm/v/ubique.svg?style=flat-square)](https://www.npmjs.com/package/ubique)

# Ubique

Mathematical and Quantitative Methods for Javascript and Node.js.

Ubique supports arrays, vectors and matrices, providing MATLAB®-like functionalities.
It includes a toolkit of functions for quantitative analysis and advanced statistics. 

Easy to use, no dependencies. Runs both in Node.js and in the Browser.

## Project Summary

The project aims to create an environment for mathematical and statistical analysis in Javascript and Node.js, alternative to MATLAB®, for scientific client-server applications.

Main categories and some features:

- Matrices and Arrays: matrix creation and concatenation, indexing, sorting and reshaping
- Data Types: array and vector functions, is-state
- Elementary Operations: sum, subtract, multiply, divide arrays and matrices 
- Elementary Math: errof function, exponent and logarithm, signum and absolute value
- Linear Algebra: determinant, inverse matrix, linear solver, LU-decomposition
- Descriptive Statistics: mean,standard deviation, kurtosis, skewness, percentile, zscore
- Probability Distributions: normal pdf and cdf, inverse, distribution test
- Interpolation and Regression Analysis
- Quantitative Analysis

View change [History](HISTORY.md) 

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
<!DOCTYPE html>
<html>
<head>
	<title>Ubique</title>
	<script src="../dist/ubique.min.js" type="text/javascript"></script>
	<p>
		Ubique Test
	</p>
</head>
<body>
	<script>
		document.write('mean([-1,3,2,4]) = ' + ubique.mean([-1,3,2,4])); // 2
	</script>
</body>
</html>
```

## Test

To perform a test execute:

```
npm test
```

## Ubique for MATLAB® users

In Ubique `number` is a number with dimension `1x1`, `array` is a column vector `Nx1`, `array of array` is a matrix `MxN`.

Functions applied to matrices are `column-major order` as in MATLAB® (but the storage is always the native javascript row-major order).

MATLAB® uses 1-based indexing, first element in array is `array(1)`, the last one is `array(length(array))`.
Ubique uses 0-based indexing, first element in array is `array[0]`, the last one is `array[array.length - 1]`.

__Comparative code__

|MATLAB®| ubique.| description|
|----- |--------|------|
|
| a = [5,6,5;7,8,-1] | `var a = [[5,6,5],[7,8,-1]]` | Matrix 2x3
| b = [-1,3,-1;4,5,9] | `var b = [[-1,3,-1],[4,5,9]]` | Matrix 2x3
| c = [5;6;3] | `var c = [[5],[6],[3]]` or `c = [5,6,3]` | Vector/Array 3x1 
| d = 10 | `var d = 10` | Number 1x1
|
| cat(1,a,b) | `cat(0,a,b)` |  Concatenate arrays and matrices
| cat(1,a,b,c') | `cat(0,a,b,transpose(c))` | Concatenate multiple inputs
| horzcat(a,b) | horzcat(a,b) | Concatenate matrices horizontally
| vertcat(a,b,c') | vertcat(a,b,transpose(c)) | Concatenate arrays or matrices vertically
| a(:,1) | `col(a,0)` | Get a column of a matrix
| a(1,:) | `row(a,0)` | Get a row of a matrix
| z = 1:2:9 | `var z = colon(1,9,2)` | Create vector -> `z = [1, 3, 5, 7, 9]`
| c(end) | `subset(c,end(c))` | Last value in array
| a(end,end) | `subset(a,end(a,0),end(a,1))` | Last value in matrix
| a(end,:) | `row(a,end(a,0))` | Last row in matrix
| a(:,end) | `col(a,end(a,1))` | Last column in matrix
| numel(a) | `numel(a)` | Number of array/matrix elements
| size(a) | `size(a)` | Array/Matrix dimensions
| [x1,x2] = ind2sub(size(a),[3,4]) | `ind2sub(size(a),[2,3])` | Multiple subscripts from linear index -> [[0, 1], [1, 1]]
| sub2ind(size(a),[1,2],[2,2]) | `sub2ind(size(a),[[0, 1], [1, 1]])` | Subscripts to linear indices -> [2,3]
| a(2:5) | `subsetlin(a,colon(1,4))` | Subset of matrix based on linear indexing (0..N-1)
| a(1:2,2:3) | `subset(a,colon(0,1),colon(1,2))` | Subset of matrix based on X,Y coordinates
| [3;5;-1]' | `transpose([3,5,-1])` | Transpose array and matrix -> `[[3, 5, -1]]` // from 3x1 to 1x3
|

## Contributors

- Nikos [(QuantumInformation)](https://github.com/QuantumInformation)

## License

The [MIT license](LICENSE)

Copyright® 2014 Max Todaro







