UBIQUE 0.0.2
============

Ubique is a powerful and extended math library for Javascript and Node.js. It supports arrays, vectors and matrices, providing functionalities in a MATLAB®-like style.

Easy to use, no dependencies.


Project Summary
===============

The project aims to create an environment for mathematical and statistical analysis in Javascript and Node.js, featuring typical MATLAB® matrix and array manipulation. A very large collection of functions in underdevelopment for:

- array creation and concatenation, indexing, sorting and reshaping
- elementary operations
- elementary math
- linear algebra
- statistics

The library is a good starting point to convert MATLAB® users to Javascript and Node.js, building new scalable client-server scientific applications.

View change <a href="https://github.com/maxto/ubique/blob/master/HISTORY.md"> history</a> 

Usage
=====

Install the library using <a href="https://www.npmjs.org/package/ubique">Npm</a>

```
npm install ubique
```

Use it as follows:

```js

// load ubique
var ubique = require('ubique');

// Matrix multiply X. * Y

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

ubique.times(a,b);  // [[-5, 18, -5], [28, 40, -9]]

```

License
=======

The <a href="https://github.com/maxto/ubique/blob/master/LICENSE.md"> MIT </a> License

Copyright® 2014 Max Todaro







