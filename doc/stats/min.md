### min(x,dim)

Smallest element in array


#### Description

Smallest element in array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
var b = [[-1,3,-1],[4,5,9]];

ubique.min([5,6,-1]); // -1
ubique.min(b,0); // [-1, 4]
ubique.min(b); // [[-1, 3, -1]]
```

