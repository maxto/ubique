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
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];

ubique.mldivide(5,6);
// 0.833333
ubique.mldivide(e,f);
// [[1.8, 1], [1.2, 0.2]]
ubique.mldivide(5,e);
// [[1.04762, 0.380952], [-1.28571, -0.285714]]
ubique.mldivide(e,a);
// [[1.42857, 1.61905, -0.47619], [-1.57143, -1.71429, 1.85714]]
```

