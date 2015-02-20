### linsolve
Solve linear system of equations Ax = b


#### Description

Solve linear system of equations Ax = b using LU factorization withrows pivoting


|Params|Type|Description
|---------|----|-----------
|`A` | matrix | square matrix
|`b` | array/matrix | vector or matrix


#### Examples

```js
var l = [[1,1,-1],[1,-2,3],[2,3,1]];
var m = [4,-6,7];

ubique.linsolve(l,m); // [1, 2, -1]

var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];
var g = ubique.cat(0,a,c);

ubique.linsolve(g,m); // [-68.5, 59, -1.5]

ubique.linsolve(l,ubique.eye(3)); // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
```

