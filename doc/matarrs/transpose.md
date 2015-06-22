### transpose

Transpose X.'


#### Syntax

ubique.transpose(x)


#### Description

Transpose of matrix X. Array is 1xN as default.  
Transpose of Array is Nx1 matrix.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of elements


#### Examples

```js
ubique.transpose([[5,6,5],[7,8,-1]]);
// [ [ 5, 7 ], [ 6, 8 ], [ 5, -1 ] ]

ubique.transpose([5,6,3]);
// [ [ 5 ], [ 6 ], [ 3 ] ]
```

