### ldivide

Left array division X. \ Y


#### Syntax

ubique.ldivide(y,x)


#### Description

Divides each element of Y by the corresponding element of X. Inputs X and Y  
must have the same size  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
ubique.ldivide(5,6);
// 1.2

ubique.ldivide([5,6,7],3);
// [ 0.6, 0.5, 0.428571 ]

ubique.ldivide(3,[-1,-2,-3]);
// [ -0.333333, -0.666667, -1 ]

ubique.ldivide([5,6,3],[0.5,-3,2.3]);
// [ 0.1, -0.5, 0.766667 ]

ubique.ldivide([[9, 5], [6, 1]],[[3, 2], [5, 2]]);
// [ [ 0.333333, 0.4 ], [ 0.833333, 2 ] ]

ubique.ldivide([[9, 5], [6, 1]],3);
// [ [ 0.333333, 0.6 ], [ 0.5, 3 ] ]
```

