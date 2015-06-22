### sterlingratio

Sterling Ratio


#### Syntax

ubique.sterlingratio(x,frisk,t,dim)


#### Description

A risk-adjusted measure like Calmar ratio but the denominator is  
the largest consecutive drawdown (excluded the 10% excess in the original formula)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`frisk` | number | annual free-risk rate (def: 0)
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.sterlingratio(x,0,12);
// 16.701049

ubique.sterlingratio(cat(0,x,y),0,12);
// [ [ 16.701049 ], [ 1.515412 ] ]
```

