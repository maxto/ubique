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
// [ [ 2.333333, -3.833333 ], [ -3.833333, 7.263333 ] ]

ubique.cov(c,d,0);
// [ [ 1.555556, -2.555556 ], [ -2.555556, 4.842222 ] ]
ubique.cov(e,f);
// [ [ 10.916667, 2 ], [ 2, 2 ] ]

ubique.cov(l);
// [ [ 0.333333, 1.166667, 0 ],[ 1.166667, 6.333333, -3 ],[ 0, -3, 4 ] ]
```

