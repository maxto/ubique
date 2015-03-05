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
|`dim` | number | dimension to apply reverse ordering 0: rows, 1: column (def: 0)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.flipdim(c);
// [3, 6, 5]
ubique.flipdim(c,1);
// [5, 6, 3]
ubique.flipdim(a);
// [[7, 8, -1], [5, 6, 5]]
ubique.flipdim(a,1);
// [[5, 6, 5], [-1, 8, 7]]
```

