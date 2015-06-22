### repmat

Replicate and tile array


#### Syntax

ubique.repmat(x,m,n)


#### Description

Replicate and tile array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix/boolean | value assigned to every elements of array or matrix
|`m` | number | number of matrix rows
|`n` | number | number of matrix columns


#### Examples

```js
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.repmat(10,3);
// [ [ 10, 10, 10 ], [ 10, 10, 10 ], [ 10, 10, 10 ] ]

ubique.repmat(0.5,3,2);
// [ [ 0.5, 0.5 ], [ 0.5, 0.5 ], [ 0.5, 0.5 ] ]

ubique.repmat([5,6,3],1,2);
// [ [ 5, 6, 3, 5, 6, 3 ] ]

ubique.repmat([[9, 5],[6, 1]],2);
// [ [ 9, 5, 9, 5 ], [ 6, 1, 6, 1 ], [ 9, 5, 9, 5 ], [ 6, 1, 6, 1 ] ]
```

