### unique

Unique values in array or matrix


#### Syntax

ubique.unique(x,flag)


#### Description

Unique values in array or matrix. Use mergsort to sort values, returns  
a matrix with 2 array, the unique values and the unique indexes.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`flag` | boolean | flag 0: export unique values, 1: export values and indexes(def: 0)


#### Examples

```js
ubique.unique([9,-3,2,-12,0,1,0,1,2,3,4,5]);
// [ -3, -3, 0, 1, 2, 3, 4, 5, 9 ]

ubique.unique([9,-3,2,-12,0,1,0,1,2,3,4,5],1);
// [ [ -3, -3, 0, 1, 2, 3, 4, 5, 9 ], [ 3, 1, 4, 5, 2, 9, 10, 11, 0 ] ]

ubique.unique([[5,4],[5,3],[6,3]]);
// [ 3, 4, 5, 6 ]

ubique.unique([[5,4],[5,3],[6,3]],1);
// [ [ 3, 4, 5, 6 ], [ 3, 1, 0, 4 ] ]
```

