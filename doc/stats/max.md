### max

Largest element in array


#### Syntax

ubique.max(x,dim)


#### Description

Largest element in array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
var b = [[-1,3,-1],[4,5,9]];

ubique.max([5,6,-1]);
// 6
ubique.max(b,0);
// [3, 9]
ubique.max(b);
// [[4, 5, 9]]
```

