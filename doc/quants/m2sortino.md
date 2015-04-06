### m2sortino

M-squared for Sortino


#### Syntax

ubique.m2sortino(x,y,frisk,mar,t,dim)


#### Description

M2 calculated for Downside risk instead of Total Risk  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio values
|`y` | array | benchmark values
|`frisk` | number | free-risk rate (def: 0)
|`mar` | number | minimum acceptable return (def: 0)
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
var cat = ubique.cat;

ubique.m2sortino(x,y,0,0,12);
// 0.103486
ubique.m2sortino(cat(1,x,y),z,0,0,12);
// [ [ 0.527018, 0.148094 ] ]
```

