### corrcoef
Correlation coefficients of two arrays X,Y


#### Description

Correlation coefficients of two arrays X,Y


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |    array or matrix of elemnts X
|`y` | array/matrix |    (vararg) second arguments, array or matrix of elements Y
|`flag` | number |       (vararg) Bessel's correction 0: population, 1: sample (def: 1)


#### Examples

```js
var c = [5,6,3];
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.corrcoef(l); // [[1, 0.802955, 0], [0.802955, 1, -0.59604], [0, -0.59604, 1]]
ubique.corrcoef(c,d); // [[1, -0.931151], [-0.931151, 1]]
```

