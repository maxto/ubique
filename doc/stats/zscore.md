### zscore

Standardized Z score


#### Syntax

ubique.zscore(x,flag,dim)


#### Description

Standardized Z score  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`flag` | number | normalization value 0: population, 1:sample (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.zscore(c);
// [0.218218, 0.872872, -1.09109]
ubique.zscore(c,0);
// [0.267261, 1.06904, -1.33631]
ubique.zscore(a,0);
// [[-1, -1, 1], [1, 1, -1]]
ubique.zscore(a,0,0);
// [[-0.707107, 1.41421, -0.707107], [0.579324, 0.827606, -1.40693]]
```

