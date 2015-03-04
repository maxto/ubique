### mpower

Matrix power X ^ Y


#### Syntax

ubique.mpower(x,y)


#### Description

Matrix power X ^ Y. X is the square input matrix and y is the scalar exponent.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | base
|`y` | number | exponent


#### Examples

```js
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.mpower(l,3);
// [[-2, 11, -11], [11, -35, 33], [22, 33, -2]]
```

