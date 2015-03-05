### times

Array multiply X. * Y


#### Syntax

ubique.times(x,y)


#### Description

Element-by-element multiplication. X and Y must have the same dimensions unless ones is a number  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
ubique.times(5,6);
// 30
ubique.times([5,6,4],[3,-1,0]);
// [15, -6, 0]
ubique.times([5,6,4],10);
// [50, 60, 40]
ubique.times(a,b);
// [[-5, 18, -5], [28, 40, -9]]
```

