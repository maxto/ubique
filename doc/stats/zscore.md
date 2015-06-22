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
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
ubique.zscore([5,6,3]);
// [ 0.218218, 0.872872, -1.091089 ]

ubique.zscore([[5,6,5],[7,8,-1]]);
// [ [ -0.57735, 1.154701, -0.57735 ],[ 0.473016, 0.675737, -1.148754 ] ]

ubique.zscore([[5,6,5],[7,8,-1]],0,1);
// [ [ -1, -1, 1 ], [ 1, 1, -1 ] ]
```

