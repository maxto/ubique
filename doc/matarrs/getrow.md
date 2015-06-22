### getrow

Get a row of matrix


#### Syntax

ubique.getrow(x,n)


#### Description

Get a row of a matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | matrix of elements
|`n` | number | row number (indexing from 0 to n - 1)


#### Examples

```js
ubique.getrow([[5,6,5],[7,8,-1]],0);
// [ 5, 6, 5 ]

ubique.getrow([[5,6,5],[7,8,-1]],1);
// [ 7, 8, -1 ]
```

