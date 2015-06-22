### linsolve

Solve linear system of equations Ax = b


#### Syntax

ubique.linsolve(A,b)


#### Description

Solve linear system of equations Ax = b using LU factorization with  
rows pivoting  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`A` | matrix | square matrix
|`b` | array/matrix | vector or matrix


#### Examples

```js
var transp = ubique.transpose;

ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],transp([5,6,3]));
[ 5.846154, -2.384615, -1.538462 ]

ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],[[4],[-6],[7]]);
// [1, 2, -1]

ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],ubique.eye(3));
// [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
```

