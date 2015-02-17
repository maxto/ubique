### mtimes
Matrix multiplication X * Y


#### Description

Matrix multiplication X * Y. If X is MxP and Y is PxN, returns a matrix MxN


|Params|Type|Description
|---------|----|-----------
|`x` | `number|array|matrix` | number or array of values
|`y` | `number|array|matrix` | number or array of values


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];

ubique.mtimes(5,6); // 30
ubique.mtimes(c,3); // [15, 18, 9]
ubique.mtimes(a,3); // [[15, 18, 15], [21, 24, -3]]
ubique.mtimes(c,[[3,4,5]]); // [[15, 20, 25], [18, 24, 30], [9, 12, 15]]
ubique.mtimes(a,c); // [[76], [80]]
```

