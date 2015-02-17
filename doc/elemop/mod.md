### mod
Modulus after division


#### Description

Modulus after division. Element-wise for matrix


|Params|Type|Description
|---------|----|-----------
|`x` | `number|array|matrix` | dividend
|`y` | `number|array|matrix` | divisor


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

ubique.mod([13,-7],2.2); //  [2, 1.8]
ubique.mod([13,-7],[5,6]); // [3, 5]
ubique.mod(a,b); // [[0, 0, 0], [3, 3, 8]]
```

