### montecarlovar
Montecarlo Value-at-Risk


#### Description

Montecarlo VaR for single asset. Based on geometric Brownian motion.


|Params|Type|Description
|---------|----|-----------
|`x` | number/array |  array of returns or standard deviation of returns
|`p` | number |  confidence level in the range [0,1] (def: 0.95)
|`t` | number |  holding period (def: 1)
|`fr` | number | free-risk rate (def: 0)
|`v` | number |  asset/portfolio start value (def: 1)
|`iter` | number | number of iterations


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

// ex-ante simulated VaR at 95% confidence for t = 1, free risk zero, start capital one
ubique.montecarlovar(x,0.95,1,0,1,10000); // 0.0771

// historical simulated daily VaR at 1% for 100k GBP asset over 10 days
ubique.montecarlovar(ubique.std(x),0.99,10,0,100000); // 23201.0819
```

