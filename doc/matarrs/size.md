### size(x)

Size of N-D array


#### Description

Size of N-D array. N-D array is equal to MxN matrix,  
1-D Array is equal to Mx1 vector, Number is equal to 1x1 array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | string/number/array/matrix | array of elements


#### Examples

```js
ubique.size([[[[5,6,5],[7,8,-1]]]]);
// [ 1, 1, 2, 3 ]
ubique.size([[3,2,7],[4,5,6]]);
//  [ 2, 3 ]
ubique.size([5,4,4]);
// [ 3, 1 ]
ubique.size(5);
// [ 1, 1 ]
ubique.size('ubique');
// [ 1, 6 ]
ubique.size([['first','second']]);
// [ 1, 2 ]
```

