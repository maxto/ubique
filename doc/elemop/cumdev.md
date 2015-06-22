### cumdev

Cumulative mean deviation


#### Syntax

ubique.cumdev(x,dim)


#### Description

Cumulative mean deviation of the values in array X  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];

ubique.cumdev([5,6,3]);
// [ 0.333333, 1.666667, -0 ]

ubique.cumdev([[-1,3,-1],[4,5,9]],0);
// [ [ -1.333333, 1.333333, 0 ], [ -2, -3, 0 ] ]

ubique.cumdev([[-1,3,-1],[4,5,9]]);
// [ [ -2.5, -1, -5 ], [ 0, 0, 0 ] ]
```

