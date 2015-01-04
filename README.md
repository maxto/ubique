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

The library is a good starting point to convert MATLAB® users to Javascript and Node.js, building new scalable client-server scientific applications.

View change [History](HISTORY.md) 

Usage
=====

Install the library using [NPM](https://www.npmjs.org/package/ubique)

```
npm install ubique
```

Use it as follows:

```js

// load ubique
var ubique = require('ubique');

// Arithmetic

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

// X + Y
ubique.plus(a,b);  // [[4, 9, 4], [11, 13, 8]]

// X - Y
ubique.minus(a,b);  // [[6, 3, 6], [3, 3, -10]]

// X. * Y (element-wise multiplication)
ubique.times(a,b);  // [[-5, 18, -5], [28, 40, -9]]

// X * Y (matrix multiplication)
ubique.mtimes(a,ubique.transpose(b)); // [[8, 95], [18, 59]]

// X. / Y (element-wise right array division)
ubique.rdivide(a,b); // [[-5, 2, -5], [1.75, 1.6, -0.111111]]

// X / Y (right matrix division)
ubique.mrdivide(a,l); // [[-0.769, 0.538, 2.615], [3.384, 0.230, 1.692]]

```

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







