### setcol

Set a column of a matrix


#### Syntax

ubique.setcol(x,mat,n)


#### Description

Set a column of a matrix. If X is an array, it is auto-converted to  
a column vector.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/vector | array or vector Mx1
|`mat` | matrix | matrix MxN of values
|`n` | number | column number (indexing from 0 to n - 1)


#### Examples

```js
ubique.setcol([2,0],[[5,6,5],[7,8,-1]],0);
// [ [ 2, 6, 5 ], [ 0, 8, -1 ] ]

ubique.setcol([9,21],[[5,6,5],[7,8,-1]],2);
// [ [ 5, 6, 9 ], [ 7, 8, 21 ] ]
```

