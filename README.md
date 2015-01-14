# UBIQUE

Ubique is a mathematical and statistical library for Javascript and Node.js. It supports arrays, vectors and matrices, providing MATLAB®-like functionalities.
It includes a toolkit of functions for quantitative analysis and advanced statistics.

Easy to use, no dependencies. 

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

Cloning the repository from [Github](https://github.com/maxto/ubique)

```
git clone git://github.com/maxto/ubique.git
```

Installing the library from [Npm](https://www.npmjs.org/package/ubique)

```
npm install ubique
```
## Browser

Ubique can be used in the browser with bundled version in `./dist` folder.

Example:

```
<!DOCTYPE html>
<html>
<head>
	<title>Ubique</title>
	<script src="../dist/ubique.js" type="text/javascript"></script>
	<p>
		Ubique Test
	</p>
</head>
<body>
	<script>
		document.write('mean([-1,3,2,4] = ' + ubique.mean([-1,3,2,4])); // 2
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

In Ubique __number__ is a number with dimension __1x1__, __array__ is a column vector __Nx1__, __array of array__ is a matrix __MxN__.

For some functions applied to matrices, the calculus follows a __column-major order__ as in MATLAB® (but the storage is always the native javascript row-major order).

MATLAB® uses 1-based indexing, first element in array is array(1), the last one is array(length(array)).
Ubique uses 0-based indexing, first element in array is array[0], the last one is array[array.length - 1].

__Comparative code__

|MATLAB®| ubique.| description|
|----- |--------|------|
| a = [5,6,5;7,8,-1];
| b = [-1,3,-1;4,5,9];
| c = [5;6;3]
|
| cat(1,a,b) | cat(0,a,b) |  Concatenate arrays and matrices
| a(:,1) | col(a,0) | Get a column of a matrix
| a(1,:) | row(a,0) | Get a row of a matrix
| 1:0.1:10 | colon(1,10,0.1) | Create vectors
| ...

## License

The [MIT license](LICENSE)

Copyright® 2014 Max Todaro







