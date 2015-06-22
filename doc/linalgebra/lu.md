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
ubique.lu([[5,6,5],[7,8,-1]]);
// { LU: [ [ 7, 8, -1 ], [ 0.714286, 0.285714, 5.714286 ] ],
//    L: [ [ 1, 0 ], [ 0.714286, 1 ] ],
//    U: [ [ 7, 8, -1 ], [ 0, 0.285714, 5.714286 ] ],
//    P: [ 1, 0 ],
//    S: -1;}

ubique.lu([[0, 5], [6, 0]]);
// { LU: [ [ 6, 0 ], [ 0, 5 ] ],
//    L: [ [ 1, 0 ], [ 0, 1 ] ],
//    U: [ [ 6, 0 ], [ 0, 5 ] ],
//    P: [ 1, 0 ],
//    S: -1;}
```

