### adjsharpe

Adjusted Sharpe Ratio


#### Syntax

ubique.adjsharpe(x,frisk,dim)


#### Description

Sharpe Ratio adjusted for skewness and kurtosis with a penalty factor  
for negative skewness and excess kurtosis.  
  
Adjusted Sharpe ratio = SR x [1 + (S/6) x SR - ((K-3) / 24) x SR^2]  
SR = sharpe ratio  
K = kurtosis  
S = skewness  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of value
|`frisk` | number | annual free-risk rate (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.adjsharpe(x,0.02/12);
// 0.748134

ubique.adjsharpe(cat(0,x,y));
// [ [ 0.830583, 0.245232 ] ]
```

