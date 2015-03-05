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
var a = [[5,6,5],[7,8,-1]];
var e = [[9, 5],[6, 1]];
var f = [[3, 2],[5, 2]];

ubique.mldivide(5,6);
// 1.2
ubique.mldivide(e,f);
// [ [ 1.0476, 0.381 ], [ -1.2857, -0.2857 ] ]
ubique.mldivide(5,e);
// [ [ 1.8, 1 ], [ 1.2, 0.2 ] ]
ubique.mldivide(e,a);
// [ [ 1.4286, 1.619, -0.4762 ], [ -1.5714, -1.7143, 1.8571 ] ]
```

