### mtimes

Matrix multiplication X * Y


#### Syntax

ubique.mtimes(x,y)


#### Description

Matrix multiplication X * Y. If X is MxP and Y is PxN, returns a matrix MxN  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
ubique.mtimes(5,6);
// 30

ubique.mtimes([5,6,3],3);
// [ 15, 18, 9 ]

ubique.mtimes([[5,6,5],[7,8,-1]],3);
// [ [ 15, 18, 15 ], [ 21, 24, -3 ] ]

ubique.mtimes([[5,6,3]],[[3],[4],[5]]);
// [ [ 54 ] ]

ubique.mtimes([[5,6,5],[7,8,-1]],[[5],[6],[3]]);
// [ [ 76 ], [ 80 ] ]
```

