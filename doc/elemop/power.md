### power(x,y)

Element-wise power X. ^ Y


#### Description

Element-wise power X. ^ Y  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];

ubique.power(5,4); // 625
ubique.power(c,5); // [3125, 7776, 243]
ubique.power(5,c); // [3125, 15625, 125]
ubique.power(a,5); // [[3125, 7776, 3125], [16807, 32768, -1]]
ubique.power(5,a); // [[3125, 15625, 3125], [78125, 3.90625e+5, 0.2]]
ubique.power(c,d); // [2.23607, 0.00462963, 12.5135]
ubique.power(a,b); // [[0.2, 216, 0.2], [2401, 32768, -1]]

```

