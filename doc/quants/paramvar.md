### paramvar
Parametric Value-At-Risk


#### Description

Parametric Value-At-Risk. Asset or portfolio returns are normally distributed.


|Params|Type|Description
|---------|----|-----------
|`mu` | number/array |    mean value (def: 0)
|`sigma` | number/array | standard deviation (def: 1)
|`p` | number |     VaR confidende level in range [0,1] (def: 0.95)
|`amount` | number | portfolio/asset amount (def: 1)
|`period` | number | time horizon (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

// parametric daily Var at 5% conf level
ubique.paramvar(ubique.mean(x),ubique.std(x)); // 0.0203108

//parametric daily VaR at 1% for 100k GBP asset over 10 days (two assets)
ubique.paramvar(ubique.mean(z),ubique.std(z),0.99,100000,10); // [11429.2, 34867.3]
```

