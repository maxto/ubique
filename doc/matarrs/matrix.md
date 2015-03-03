### matrix()

Create a matrix object


#### Description

Create a matrix object with 2 inputs, an array of size [rows,cols] and a chosen value  
or with 3 inputs, two numbers for dimension (rows,cols) and the last one for the value  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... | variable input arguments (max 3)


#### Examples

```js
ubique.matrix(0); // []
ubique.matrix(2): // [[NaN, NaN], [NaN, NaN]]
ubique.matrix([2,3]); // [[NaN, NaN, NaN], [NaN, NaN, NaN]]
ubique.matrix(2,3); // [[NaN, NaN, NaN], [NaN, NaN, NaN]]
ubique.matrix([2,3],0); // [[0, 0, 0], [0, 0, 0]]
ubique.matrix(2,3); // [[0, 0, 0], [0, 0, 0]]
```

