UBIQUE 0.0.4
============

Ubique is a powerful and extended math library for Javascript and Node.js. It supports arrays, vectors and matrices, providing functionalities in a MATLAB®-like style.

Easy to use, no dependencies.

Project Summary
===============

The project aims to create an environment for mathematical and statistical analysis in Javascript and Node.js, featuring typical MATLAB® matrix and array manipulation. It includes methods for:

- array creation and concatenation, indexing, sorting and reshaping
- elementary operations
- elementary math
- linear algebra
- statistics
- interpolation and regression analysis
- probability distribution
- financial data analysis

View change [History](HISTORY.md) 

Install
=======

Install the library using [npm](https://www.npmjs.org/package/ubique)

```
npm install ubique

```

Ubique for MATLAB® users
========================

Ubique has been created to do quantitative and mathematical computing in Javascript and Node.js, to build  client-server applications, mimicking some functionalities and coding style of MATLAB®.

In Ubique __number__ is a number with dimension __1x1__, __array__ is a column vector __Nx1__, __array of array__ is a matrix __MxN__.

In Ubique the matrix calculus is __column-major order__ as in MATLAB® (but the storage follows the native javascript row-major order).

MATLAB uses 1-based indexing, first element in array is array(1), the last one is array(length(array)).
Ubique uses 0-based indexing, first element in array is array[0], the last one is array[array.length - 1].

__Comparative programming__

|MATLAB| UBIQUE | notes|
|----- |--------|------|
| a = [5,6,5;7,8,-1];
| b = [-1,3,-1;4,5,9];
| c = [5;6;3]
|
| cat(1,a,b) | cat(0,a,b) |  Concatenate arrays and matrices
| a(:,1) | col(a,0) | Get a column of a matrix
| a(1,:) | row(a,0) | Get a row of a matrix
| 1:0.1:10 | colon(1,10,0.1) | Create vectors
|


Test
====

To perform a test execute:

```
npm test
```

Contributors
============

Thanks to:

- [Nikos-QuantumInformation](https://github.com/QuantumInformation)

License
=======

The [MIT license](LICENSE.md)

Copyright® 2014 Max Todaro







