### plus

Addition X + Y


#### Syntax

ubique.plus(x,y)


#### Description

Addition X + Y  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];

ubique.plus(5,6);
// 11
ubique.plus([5,6,4],[3,-1,0]);
// [8, 5, 4]
ubique.plus([5,6,4],10);
// [15, 16, 14]
ubique.plus(NaN,[5,6,4]);
// [NaN, NaN, NaN]
ubique.plus(a,b);
// [[4, 9, 4], [11, 13, 8]]
```

