### setrow

Set a row of matrix


#### Syntax

ubique.setrow(x,mat,n)


#### Description

Set a row of a matrix.If X is an array, it is auto-converted to  
a row vector.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/vector | array or vector 1xN
|`mat` | matrix | matrix MxN of values
|`n` | number | column number (indexing from 0 to n - 1)


#### Examples

```js
ubique.setrow([2,0,-2],[[5,6,5],[7,8,-1]],0);
// [ [ 2, 0, -2 ], [ 7, 8, -1 ] ]

ubique.setrow([9,21,57],[[5,6,5],[7,8,-1]],1);
// [ [ 5, 6, 5 ], [ 9, 21, 57 ] ]
```

