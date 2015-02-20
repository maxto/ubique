### ldivide
Left array division X. \ Y


#### Description

Divides each element of Y by the corresponding element of X. Inputs X and Ymust have the same size


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
var a = [5,6,7];
var b = [-1,-2,-3];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];

ubique.ldivide(5,6); // 1.2
ubique.ldivide([5,6,7],3); // [0.6, 0.5, 0.428571]
ubique.ldivide(3,[-1,-2,-3]); // [-0.333333, -0.666667, -1]
ubique.ldivide(c,d); // [0.1, -0.5, 0.766667]
ubique.ldivide(e,f); //  [[3, 2.5], [1.2, 0.5]]
ubique.ldivide(e,3); //  [[0.333333, 0.6], [0.5, 3]]
```

