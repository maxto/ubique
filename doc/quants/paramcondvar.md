### paramcondvar(mu,sigma,p,amount,period)

Parametric Conditional Value-At-Risk


#### Description

Parametric Conditional Value-At-Risk. More sensitive to the shape of the loss distribution in the tails  
Also known as Expected Shortfall (ES), Expected Tail Loss (ETL).  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`mu` | number/array |    mean value (def: 0)
|`sigma` | number/array | standard deviation (def: 1)
|`p` | number |     cVaR confidende level in range [0,1] (def: 0.95)
|`amount` | number | portfolio/asset amount (def: 1)
|`period` | number | time horizon (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

// parametric daily Var at 5% conf level
ubique.paramcondvar(ubique.mean(x),ubique.std(x)); // 0.0300178

//parametric daily VaR at 1% for 100k GBP asset over 10 days (two assets)
ubique.paramcondvar(ubique.mean(z),ubique.std(z),0.99,100000,10); // [19579, 44511.1]
```

