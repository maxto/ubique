### sum

Sum of array elements


#### Syntax

ubique.sum(x,dim)


#### Description

Sum of array elements  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension, 1: column 0: row (def: 1)


#### Examples

```js
ubique.sum([5,6,3]);
// 14
ubique.sum([[5,6,5],[7,8,-1]],0);
// [16, 14]
ubique.sum([[5,6,5],[7,8,-1]],1);
// [[12, 14, 4]]
```

