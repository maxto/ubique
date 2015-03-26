### avgdrawdown

Average drawdown


#### Syntax

ubique.avgdrawdown(x,k,dim)


#### Description

Average drawdown or average K-largest drawdown  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`k` | number | largest drawdown. k = 0 for all continuous drawdown (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

// average drawdown
ubique.avgdrawdown(x);
// 0.0115

// 1-largest drawdown
ubique.avgdrawdown(x,1);
// 0.014

ubique.avgdrawdown(ubique.cat(1,x,y));
// [ [ 0.0115, 0.0566 ] ]
```

