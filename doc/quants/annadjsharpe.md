### annadjsharpe

Annualized Adjusted Sharpe Ratio


#### Syntax

ubique.annadjsharpe(x,frisk,t,type,dim)


#### Description

Sharpe Ratio adjusted for skewness and kurtosis with a penalty factor  
for negative skewness and excess kurtosis.  
  
Adjusted Sharpe ratio = SR x [1 + (S/6) x SR - ((K-3) / 24) x SR^2]  
SR = sharpe ratio with annualized return/risk  
K = kurtosis  
S = skewness  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of value
|`frisk` | number | annual free-risk rate (def: 0)
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
|`type` | string | 'geometric' or 'simple' (def: 'geometric')
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.annadjsharpe(x,0.02,12,'geometric');
// 3.376724

ubique.annadjsharpe(cat(1,x,y),0,12);
// [ [ 3.766555, 0.827757 ] ]
```

