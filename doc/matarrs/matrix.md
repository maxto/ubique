### matrix

Create a matrix object


#### Syntax

ubique.matrix()


#### Description

Create a matrix object with 2 inputs, an array of size [rows,cols] and a chosen value  
or with 3 inputs, two numbers for dimension (rows,cols) and the last one for the value.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... | variable input arguments (max 3)


#### Examples

```js
ubique.matrix(0);
// []
ubique.matrix(2);
// [[0, 0], [0, 0]]
ubique.matrix([2,3]);
// [[0, 0, 0], [0, 0, 0]]
ubique.matrix(2,3);
// [[0, 0, 0], [0, 0, 0]]
ubique.matrix([2,3],5);
// [[5, 5, 5], [5, 5, 5]]
ubique.matrix(2,3);
// [[0, 0, 0], [0, 0, 0]]
```

