### matrix

Create a matrix object


#### Syntax

ubique.matrix()


#### Description

Create a matrix object with minimum 1 argument, max 3 arguments. The first arg can be a number or array, the last one is the value to  
replicate in the matrix. Default value is NULL. Example: a matrix(2) returns an array of array with dimension 2x2, a matrix(2,3) or matrix([2,3]) a matrix  
with dimension 2x3 and values equal to NULL.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/string/boolean/array/... | variable input arguments (max 3)


#### Examples

```js
ubique.matrix(0);
// [ [] ]

ubique.matrix([0,0]);
// [ [] ]

ubique.matrix(2);
// [ [ null, null ], [ null, null ] ]

ubique.matrix([2,3]);
// [ [ null, null, null ], [ null, null, null ] ]

ubique.matrix(2,3);
// [ [ null, null, null ], [ null, null, null ] ]

ubique.matrix([2,3],-1);
// [ [ -1, -1, -1 ], [ -1, -1, -1 ] ]


ubique.matrix(3,1,'matrix');
// [ [ 'matrix' ], [ 'matrix' ], [ 'matrix' ] ]

ubique.matrix(0,5,true);
// [ [] ]
```

