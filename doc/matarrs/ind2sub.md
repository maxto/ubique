### ind2sub(size,index)

Multiple subscripts from linear index


#### Description

Multiple subscripts from linear index. Returns an array or matrix with  
the equivalent row and column of the corresponding index.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`size` | array/matrix |  size of array or matrix
|`index` | number/array | linear indexing [0...N-1]


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];

ubique.ind2sub(ubique.size(a),5); // [1, 2]
ubique.ind2sub(ubique.size(a),[0,1,2]); // [[0, 0], [1, 0], [0, 1]]
ubique.ind2sub(ubique.size([5,6,3]),2); // [2, 0]
```

