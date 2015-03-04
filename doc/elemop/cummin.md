### cummin

Cumulative min of array elements


#### Syntax

ubique.cummin(x,dim)


#### Description

Cumulative min of array elements  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
ubique.cummin([5,6,3]);
// [5, 5, 3]
ubique.cummin([[5,6,5],[7,8,-1]]);
// [[5, 6, 5], [5, 6, -1]]
ubique.cummin([[5,6,5],[7,8,-1]],0);
// [[5, 5, 5], [7, 7, -1]]
```

