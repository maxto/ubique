### det
Matrix determinant


#### Description

Matrix determinant with LU decomposition method


|Params|Type|Description
|---------|----|-----------
|`x` | matrix | square matrix


#### Examples

```js
var e = [[0, 5], [6, 0]];
var f = [[3, 2], [5, 2]];

ubique.det(e); // -30
ubique.det(f); // -4
ubique.det([[2,2],[2,2]]); // 0
```

