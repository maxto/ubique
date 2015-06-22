### cat

Concatenate arrays and matrices


#### Syntax

ubique.cat()


#### Description

Concatenate arrays and matrices along specified dimension as first argument.  
Number size 1x1, Array size 1xN, Matrix size MxN  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/matrix... | variable arguments (0:rows, 1:columns)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var f = [[3, 2], [5, 2]];

// Vertical Concatenation (DIM = 0)

ubique.cat(0,1,2,3,4);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(0,1,2,[3],4);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(0,1,2,[[3],[4]]);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(0,[1],2,3,[4]);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(0,c,d);
// [ [ 5, 6, 3 ], [ 0.5, -3, 2.3 ] ]

ubique.cat(0,c,d,a);
// [ [ 5, 6, 3 ], [ 0.5, -3, 2.3 ], [ 5, 6, 5 ], [ 7, 8, -1 ] ]

ubique.cat(0,[[1]],[2],3,4);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(0,a,c);
// [ [ 5, 6, 5 ], [ 7, 8, -1 ], [ 5, 6, 3 ] ]

// Horizontal Concatenation (DIM = 1)

ubique.cat(1,1,2,3,4);
// [ [ 1, 2, 3, 4 ] ]

ubique.cat(1,1,2,[3],4);
// [ [ 1, 2, 3, 4 ] ]

ubique.cat(1,1,2,[3,4]);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(1,[1],2,3,4);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(1,[[1]],2,3,4);
// [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]

ubique.cat(1,c,5);
// [ [ 5, 6, 3, 5 ] ]

ubique.cat(1,c,d);
// [ [ 5, 6, 3, 0.5, -3, 2.3 ] ]

ubique.cat(1,[[2,3,4,5]],c,d);
// [ [ 2, 3, 4, 5, 5, 6, 3, 0.5, -3, 2.3 ] ]
```

