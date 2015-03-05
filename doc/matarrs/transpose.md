### transpose

Transpose X.'


#### Syntax

ubique.transpose(x)


#### Description

Transpose of matrix X. Array is Nx1 as default.  
Transpose of Array is 1xN matrix.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of elements


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.transpose(a);
// [ [ 5, 7 ], [ 6, 8 ], [ 5, -1 ] ]
ubique.transpose(c);
// [ [ 5 ], [ 6 ], [ 3 ] ]
```

