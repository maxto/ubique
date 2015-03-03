### floor(x,n)

Round toward negative infinity


#### Description

Round toward negative infinity  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values


#### Examples

```js
ubique.floor(Math.PI,12); // 3.141592653589
ubique.floor(3.78); // 3
ubique.floor([4.51,-1.4]); // [4, -2]
ubique.floor([[4.5134,-1.4345],[3.7809,0.0134]],2); // [[4.51, -1.44], [3.78, 0.01]]
```

