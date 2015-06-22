### flatten

Flatten a matrix


#### Syntax

ubique.flatten(x,dim)


#### Description

Flatten a matrix and returns an array. The concatenation is made by columns (default)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | matrix of elements
|`dim` | number | dimension selected, 1: column 0: row (def: 0)


#### Examples

```js
ubique.flatten([[5,6],[7,8]]);
// [ 5, 7, 6, 8 ]

// flatten by rows
ubique.flatten([[1,1,-1],[1,-2,3],[2,3,1]]);
// [ 1, 1, -1, 1, -2, 3, 2, 3, 1 ]

// flatten by columns
ubique.flatten([[1,1,-1],[1,-2,3],[2,3,1]],1);
// [ 1, 1, 2, 1, -2, 3, -1, 3, 1 ]

```

