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
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];
var g = [[5,6,5],[7,8,-1],[5,6,3]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];
var m = [4,-6,7];

ubique.linsolve(l,m);
// [1, 2, -1]

ubique.linsolve(g,m);
// [-68.5, 59, -1.5]

ubique.linsolve(l,ubique.eye(3));
// [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
```

