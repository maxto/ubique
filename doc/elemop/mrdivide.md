### mrdivide

Matrix division X / Y


#### Syntax

ubique.mrdivide(x,y)


#### Description

Matrix division X / Y. If X is MxN and Y is NxN, then  
it returns a matrix MxN. X is multiplied with the inverse of Y. Y must be square.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
ubique.mrdivide(5,6);
// 0.833333

ubique.mrdivide([5,6,3],6);
// [ 0.833333, 1, 0.5 ]

ubique.mrdivide([[9, 5], [6, 1]],5);
// [ [ 1.8, 1 ], [ 1.2, 0.2 ] ]

ubique.mrdivide([[9, 5], [6, 1]],[[3, 2], [5, 2]]);
// [ [ 1.75, 0.75 ], [ -1.75, 2.25 ] ]

ubique.mrdivide([[5,6,5],[7,8,-1]],[[1,1,-1],[1,-2,3],[2,3,1]]);
// [ [ -0.769231, 0.538462, 2.615385 ],[ 3.384615, 0.230769, 1.692308 ] ]
```

