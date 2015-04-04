### painratio

Pain Ratio


#### Syntax

ubique.painratio(x,frisk,t,mode,dim)


#### Description

A risk-adjusted measure with free risk and Pain index.  
  
Pain Ratio = (Portfolio Return - RiskFree) / Pain Index  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`frisk` | number | annual free-risk rate (def: 0)
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.painratio(x,0,12);
// 101.658557

ubique.painratio(cat(1,x,y),0,12,'return',1);
// [ [ 101.658557, 3.377716 ] ]
```

