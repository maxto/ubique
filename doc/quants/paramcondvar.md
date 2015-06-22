### paramcondvar

Parametric Conditional Value-At-Risk


#### Syntax

ubique.paramcondvar(mu,sigma,p,amount,period)


#### Description

Parametric Conditional Value-At-Risk. More sensitive to the shape of the loss distribution in the tails  
Also known as Expected Shortfall (ES), Expected Tail Loss (ETL).  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`mu` | number/array | mean value (def: 0)
|`sigma` | number/array | standard deviation (def: 1)
|`p` | number | cVaR confidende level in range [0,1] (def: 0.95)
|`amount` | number | portfolio/asset amount (def: 1)
|`period` | number | time horizon (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

// parametric daily Var at 95% conf level
ubique.paramcondvar(ubique.mean(x),ubique.std(x));
// 0.030018

//parametric daily VaR at 99% for 100k GBP asset over 10 days (two assets)
ubique.paramcondvar(ubique.mean(ubique.cat(0,x,y)),ubique.std(ubique.cat(0,x,y)),0.99,100000,10);
// [ [ 19578.980844 ], [ 44511.107219 ] ]
```

