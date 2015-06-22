### paramvar

Parametric Value-At-Risk


#### Syntax

ubique.paramvar(mu,sigma,p,amount,period)


#### Description

Parametric Value-At-Risk. Assets or portfolio returns are normally distributed.  
It manages numbers, arrays, row vectors [[a,b,...,n]] and column vectors [[a],[b],...,[n]]  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`mu` | number/array | mean value (def: 0)
|`sigma` | number/array | standard deviation (def: 1)
|`p` | number | VaR confidende level in range [0,1] (def: 0.95)
|`amount` | number | portfolio/asset amount (def: 1)
|`period` | number | time horizon (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

// VaR with numbers
ubique.paramvar(0,1);
// 1.644854

// VaR with arrays
ubique.paramvar([0,0,0],[1,2,3]);
[ 1.644854, 3.289707, 4.934561 ]

// parametric VaR at 95% conf level
ubique.paramvar(ubique.mean(x),ubique.std(x));
// 0.020311

ubique.paramvar(ubique.mean(ubique.cat(0,x,y)),ubique.std(ubique.cat(0,x,y)));
// [ [ 0.020311 ], [ 0.074269 ] ]

//parametric VaR at 99% for 100k GBP asset over 10 days (two assets)
ubique.paramvar(ubique.mean(ubique.cat(0,x,y)),ubique.std(ubique.cat(0,x,y)),0.99,100000,10);
// [ [ 11429.165523 ], [ 34867.319072 ] ]
```

