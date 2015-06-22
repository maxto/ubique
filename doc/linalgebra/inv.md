### inv

Matrix inverse


#### Syntax

ubique.inv(x)


#### Description

Inverse of a square matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values


#### Examples

```js
ubique.inv([[3, 2], [5, 2]]);
// [ [ -0.5, 0.5 ], [ 1.25, -0.75 ] ]

ubique.inv([[1,1,-1],[1,-2,3],[2,3,1]]);
// [ [ 0.846154, 0.307692, -0.076923 ], [ -0.384615, -0.230769, 0.307692 ], [ -0.538462, 0.076923, 0.230769 ] ]
```

