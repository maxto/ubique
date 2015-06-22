### flipdim

Flip order of elements in array or matrix


#### Syntax

ubique.flipdim(x,dim)


#### Description

Flip order of elements in array or matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of elements
|`dim` | number | dimension to apply reverse ordering 0: rows, 1: column (def: 1)


#### Examples

```js
ubique.flipdim([5,6,3],1);
// [3, 6, 5]

ubique.flipdim([5,6,3],0);
// [5, 6, 3]

ubique.flipdim([[5,6,5],[7,8,-1]]);
// [ [ 5, 6, 5 ], [ -1, 8, 7 ] ]

ubique.flipdim([[5,6,5],[7,8,-1]],0);
// [ [ 7, 8, -1 ], [ 5, 6, 5 ] ]
```

