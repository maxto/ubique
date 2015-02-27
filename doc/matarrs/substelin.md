### substelin
Subset of array or matrix based on linear indexing


#### Description

Subset of array or matrix based on linear indexing


|Params|Type|Description
|---------|----|-----------
|`m` | array/matrix |   array or matrix of elements
|`idx` | numer/array/matrix | linear indexing


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.subsetlin(a,1);
// [ 7 ]
ubique.subsetlin(a,[0,1,2,3]);
// [ 5, 7, 6, 8 ]
ubique.subsetlin(a,[[0,1,2],[2,3,4]]);
// [ [ 5, 7, 6 ], [ 6, 8, 5 ] ]
ubique.subsetlin(c,[0,1]);
// [ 5, 6 ]
ubique.subsetlin(c,[[0,1],[1,2]]);
// [ [ 5, 6 ], [ 6, 3 ] ]
```

