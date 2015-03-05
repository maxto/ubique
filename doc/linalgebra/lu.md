### lu

LU matrix factorization


#### Syntax

ubique.lu(x)


#### Description

LU matrix factorization based on Doolittle algorithm. The LU decomposition with pivoting always exists, even if the matrix is singular.  
Returns an object:  
  
LU (lu matrix)  
L (lower triangular matrix)  
U (upper triangular matrix)  
P (pivot vector)  
S (pivot sign) +1 or -1  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | input matrix


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var e = [[0, 5], [6, 0]];

ubique.lu(a);
// { LU: [ [ 7, 8, -1 ], [ 0.7142857142857143, 0.2857142857142856, 5.714285714285714 ] ],
//    L: [ [ 1, 0 ], [ 0.7142857142857143, 1 ] ],
//    U: [ [ 7, 8, -1 ], [ 0, 0.2857142857142856, 5.714285714285714 ] ],
//    P: [ 1, 0 ],
//    S: -1;}

ubique.lu(e);
// { LU: [ [ 6, 0 ], [ 0, 5 ] ],
//    L: [ [ 1, 0 ], [ 0, 1 ] ],
//    U: [ [ 6, 0 ], [ 0, 5 ] ],
//    P: [ 1, 0 ],
//    S: -1;}
```

