### cov

Covariance matrix


#### Syntax

ubique.cov(x)


#### Description

Covariance matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of elemnts X
|`y` | array/matrix | array or matrix of elements Y
|`flag` | number | Bessel's correction 0: population, 1: sample (def: 1)


#### Examples

```js
var c = [5,6,3];
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.cov(c);
// 2.33333
ubique.cov(c,d);
// [[2.33333, -3.83333], [-3.83333, 7.26333]]
ubique.cov(c,d,0);
// [[1.55556, -2.55556], [-2.55556, 4.84222]]
ubique.cov(e,f);
// [[10.9167, 2], [2, 2]]
ubique.cov(l);
// [[0.333333, 1.16667, 0], [1.16667, 6.33333, -3], [0, -3, 4]]
```

