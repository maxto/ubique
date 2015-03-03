### inv(x)

Matrix inverse


#### Description

Inverse of a square matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values


#### Examples

```js
var f = [[3, 2], [5, 2]]; // [[-0.5, 0.5], [1.25, -0.75]]
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.inv(f); // [[-0.5, 0.5], [1.25, -0.75]]
ubique.inv(l); // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
```

