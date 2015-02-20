### sub2ind
Subscripts to linear indices


#### Description

Subscripts to linear indices. Convert a 2D coordinates X,Y of a matrix into linear indices


|Params|Type|Description
|---------|----|-----------
|`size` | array/matrix |  size of array or matrix
|`index` | array/matrix | X,Y coordinates for 2D matrices in the range [0...N-1]


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];

ubique.sub2ind(ubique.size(a),[1, 2]); // 5
ubique.sub2ind(ubique.size(a),[[0, 0], [1, 0], [0, 1]]); // [0, 1, 2]
ubique.sub2ind(ubique.size([5,6,3]),[2, 0]); // 2
```

