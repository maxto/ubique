### round

Round to nearest integer


#### Syntax

ubique.round(x,n)


#### Description

Round to nearest integer. Element-wise for matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | values
|`n` | number | number of decimal (def: 0)


#### Examples

```js
ubique.round(Math.PI,12);
// 3.14159265359
ubique.round([-1.4543,4.5234],2);
// [-1.45, 4.52]
ubique.round([-1.9,-0.2,3.4,5.6,7.0]);
// [-2, 0, 3, 6, 7]
ubique.round([[1.45,-2.3],[1.1,-4.3]]);
// [[1, -2], [1, -4]]
```

