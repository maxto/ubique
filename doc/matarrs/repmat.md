### repmat
Replicate and tile array


#### Description

Replicate and tile array


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix/boolean |  value assigned to every elements of array or matrix
|`m` | number | number of matrix rows
|`n` | number | number of matrix columns


#### Examples

```js
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.repmat(10,3); // [[10, 10, 10], [10, 10, 10], [10, 10, 10]]
ubique.repmat(0.5,3,2); // [[0.5, 0.5], [0.5, 0.5], [0.5, 0.5]]
ubique.repmat(0.5,1,4); // [[ 0.5, 0.5, 0.5 ]]
ubique.repmat(NaN,2,4); // [[NaN, NaN, NaN, NaN], [NaN, NaN, NaN, NaN]]
ubique.repmat(true,4,1);  // [[true], [true], [true], [true]]
ubique.repmat([5,6,3],1,2); // [[5, 5], [6, 6], [3, 3]]
ubique.repmat(l,2); // [[1, 1, -1, 1, 1, -1], [1, -2, 3, 1, -2, 3], [2, 3, 1, 2, 3, 1], [1, 1, -1, 1, 1, -1], [1, -2, 3, 1, -2, 3], [2, 3, 1, 2, 3, 1]]
```

