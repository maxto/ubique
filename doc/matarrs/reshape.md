### reshape

Reshape array or matrix with custom values


#### Syntax

ubique.reshape(x,m,n,flag)


#### Description

Reshape array or matrix with custom values based on rows values of X  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of elements
|`m` | number | number of rows for the new matrix
|`n` | number | number of cols for the new matrix
|`flag` | number | flag 0: rowwise element, 1: columnwise (def: 0)


#### Examples

```js
ubique.reshape([5,6,3],3,1);
// [ [ 5 ], [ 6 ], [ 3 ] ]

ubique.reshape([5,6,3],1,3);
// [ 5, 6, 3 ]

ubique.reshape([[-1,3,-1],[4,5,9]],3,2);
// [ [ -1, 4 ], [ 3, 5 ], [ -1, 9 ] ]

ubique.reshape([[-1,3,-1],[4,5,9]],3,2,1);
// [ [ -1, 5 ], [ 4, -1 ], [ 3, 9 ] ]

ubique.reshape([[-1,3,-1],[4,5,9]],6,1);
// [ [ -1 ], [ 3 ], [ -1 ], [ 4 ], [ 5 ], [ 9 ] ]

ubique.reshape([[-1,3,-1],[4,5,9]],6,1,1);
// [ [ -1 ], [ 4 ], [ 3 ], [ 5 ], [ -1 ], [ 9 ] ]
```

