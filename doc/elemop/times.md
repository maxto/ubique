### times
Array multiply X. * Y


#### Description

Element-by-element multiplication. X and Y must have the same dimensions unless ones is a number


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
ubique.times(5,6);  // 30
ubique.times([5,6,4],[3,-1,0]); //  [15, -6, 0]
ubique.times([5,6,4],10); //  [50, 60, 40]
ubique.times(NaN,[5,6,4]);  // [NaN, NaN, NaN]

var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
ubique.times(a,b);  // [[-5, 18, -5], [28, 40, -9]]
```

