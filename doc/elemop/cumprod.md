### cumprod(x,dim)

Cumulative product of array elements


#### Description

Cumulative product of array elements  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
ubique.cumprod([5,6,3]); // [5, 30, 90]
ubique.cumprod([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [35, 48, -5]]
ubique.cumprod([[5,6,5],[7,8,-1]],0); // [[5, 30, 150], [7, 56, -56]]
```

