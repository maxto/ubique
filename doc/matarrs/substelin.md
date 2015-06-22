### substelin

Subset of array or matrix based on linear indexing


#### Syntax

ubique.substelin(m,idx,flag)


#### Description

Subset of array or matrix based on linear indexing by rows (default)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`m` | array/matrix |   array or matrix of elements
|`idx` | numer/array/matrix | linear indexing
|`flag` | number | flag 0: rowwise element, 1: columnwise (def: 0)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.subsetlin(a,1);
// [ 6 ]

// subset by rows
ubique.subsetlin(a,[0,1,2,3]);
// [ 5, 6, 5, 7 ]

// subset by columns
ubique.subsetlin(a,[0,1,2,3],1);
// [ 5, 7, 6, 8 ]

ubique.subsetlin(a,[[0,1,2],[2,3,4]],1);
// [ [ 5, 7, 6 ], [ 6, 8, 5 ] ]

ubique.subsetlin(c,[0,1]);
// [ 5, 6 ]

ubique.subsetlin(c,[[0,1],[1,2]]);
// [ [ 5, 6 ], [ 6, 3 ] ]
```

