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

ubique.cumdev(c);
// [0.333333, 1.66667, -8.88178e-16]
ubique.cumdev(b,0);
// [[-1.33333, 1.33333, 0], [-2, -3, 0]]
ubique.cumdev(b);
// [[-2.5, -1, -5], [0, 0, 0]]
```

