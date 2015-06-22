### mldivide

Matrix division X \ Y


#### Syntax

ubique.mldivide(y,x)


#### Description

Matrix division X \ Y. If X is NxN and Y is NxM, then  
returns a matrix NxM. Y is multiplied with the inverse of X. X must be square.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
ubique.mldivide(5,6);
// 1.2

ubique.mldivide([[9, 5],[6, 1]],[[3, 2],[5, 2]]);
// [ [ 1.047619, 0.380952 ], [ -1.285714, -0.285714 ] ]

ubique.mldivide(5,[[9, 5],[6, 1]]);
// [ [ 1.8, 1 ], [ 1.2, 0.2 ] ]

ubique.mldivide([[9, 5],[6, 1]],[[5,6,5],[7,8,-1]]);
// [ [ 1.428571, 1.619048, -0.47619 ],[ -1.571429, -1.714286, 1.857143 ] ]
```

