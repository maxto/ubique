### rdivide
Right array division X. / Y


#### Description

Divides each element of X by the corresponding element of Y. Inputs X and Ymust have the same size


|Params|Type|Description
|---------|----|-----------
|`x` | `number|array|matrix` | number or array of values
|`y` | `number|array|matrix` | number or array of values


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [-1,-2,-3];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];

ubique.rdivide(5,6); // 0.833333
ubique.rdivide(a,3); // [[1.66667, 2, 1.66667], [2.33333, 2.66667, -0.333333]]
ubique.rdivide(3,[-1,-2,-3]); // [-3, -1.5, -1]
ubique.rdivide([5,6,7],[-1,-2,-3]); // [-5, -3, -2.33333]
ubique.rdivide(e,f); //  [[3, 2.5], [1.2, 0.5]]
ubique.rdivide(e,3); //  [[3, 1.66667], [2, 0.333333]]
```

