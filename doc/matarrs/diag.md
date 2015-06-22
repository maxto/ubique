### diag

Diagonal matrix and get diagonals of a matrix


#### Syntax

ubique.diag(x,k)


#### Description

Diagonal matrix (for array) and get diagonals of a matrix (for matrix)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix values
|`k` | number | k-th diagonal. 0: main diagonal, k > 0 above, k < 0 below (def: 0)


#### Examples

```js
// build diag matrix
ubique.diag([5,6,-3]);
// [ [ 5, 0, 0 ], [ 0, 6, 0 ], [ 0, 0, -3 ] ]

ubique.diag([5,6,-3],1);
// [ [ 0, 5, 0, 0 ],[ 0, 0, 6, 0 ],[ 0, 0, 0, -3 ],[ 0, 0, 0, 0 ] ]

ubique.diag([5,6,-3],-1);
// [ [ 0, 0, 0, 0 ],[ 5, 0, 0, 0 ],[ 0, 6, 0, 0 ],[ 0, 0, -3, 0 ] ]

// get diag values from matrix
ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]]);
// [ 5, 6, -3 ]

ubique.diag([[0, 5, 0, 0], [0, 0, 6, 0], [0, 0, 0, -3], [0, 0, 0, 0]],1);
// [ 5, 6, -3 ]

ubique.diag([[0, 0, 0, 0], [5, 0, 0, 0], [0, 6, 0, 0], [0, 0, -3, 0]],-1);
// [ 5, 6, -3 ]

ubique.diag([[5, 0, 0], [0, 6, 0], [0, 0, -3]],2);
// [0]
```

