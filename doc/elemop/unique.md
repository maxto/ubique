### unique(x,dim)

Unique values in array or matrix


#### Description

Unique values in array or matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
ubique.unique([5,5,6,6,7]);
// [ 5, 6, 7 ]
ubique.unique([[5,4],[5,3],[6,3]]);
// [ [ 5, 3 ], [ 6, 4 ] ]
```

