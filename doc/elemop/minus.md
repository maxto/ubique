### minus
Subtraction X - Y


#### Description

Subtraction X - Y. X and Y must have the same dimension unless one is a number


|Params|Type|Description
|---------|----|-----------
|`x` | `number|array|matrix` | number or array of values
|`y` | `number|array|matrix` | number or array of values


#### Examples

```js
ubique.minus(5,6);  // -1
ubique.minus([5,6,4],[3,-1,0]); //  [2, 7, 4]
ubique.minus([5,6,4],10); //  [-5, -4, -6]
ubique.minus(NaN,[5,6,4]);  // [NaN, NaN, NaN]

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
ubique.minus(a,b);  // [[6, 3, 6], [3, 3, -10]]
```

