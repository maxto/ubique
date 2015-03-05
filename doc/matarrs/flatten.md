### flatten

Flatten a matrix


#### Syntax

ubique.flatten(x,dim)


#### Description

Flatten a matrix and returns an array. The concatenation is made by columns.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | matrix of elements
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.flatten([[5,6],[7,8]]);
// [5, 7, 6, 8]
ubique.flatten([[5,6],[7,8]],1);
// [5, 6, 7, 8]
ubique.flatten(l);
// [1, 1, 2, 1, -2, 3, -1, 3, 1]
```

