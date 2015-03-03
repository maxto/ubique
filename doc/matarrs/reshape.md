### reshape(x,m,n)

Reshape array or matrix with custom values


#### Description

Reshape array or matrix with custom values  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |  array or matrix of elements
|`m` | number | number of rows for the new matrix
|`n` | number | number of cols for the new matrix


#### Examples

```js
var b = [[-1,3,-1],[4,5,9]];

ubique.reshape([5,6,3],1,3); // [[5, 6, 3]]
ubique.reshape(b,3,2); // [[-1, 5], [4, -1], [3, 9]]
ubique.reshape(b,6,1); // [[-1], [4], [3], [5], [-1], [9]]
```

