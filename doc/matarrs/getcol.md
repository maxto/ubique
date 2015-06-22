### getcol

Get a column of a matrix


#### Syntax

ubique.getcol(x,n)


#### Description

Get a column of a matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | matrix of elements
|`n` | number | column number (indexing from 0 to n - 1)


#### Examples

```js
ubique.getcol([[5,6,5],[7,8,-1]],0);
// [ 5, 7 ]

ubique.getcol([[5,6,5],[7,8,-1]],2);
// [ 5, -1 ]
```

