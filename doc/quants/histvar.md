### histvar

Historical Value-At-Risk


#### Syntax

ubique.histvar(x,p,amount,period,dim)


#### Description

Univariate historical simulation. Single asset  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`p` | number | confidence level in the range [0,1] (def: 0.95)
|`amount` | number | amount (def: 1)
|`period` | period | time horizon (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

// historical daily VaR at 5% conf level
ubique.histvar(ubique.cat(1,x,y),0.95);
// [[0.014, 0.061]]

// historical daily VaR at 1% for 100k GBP asset over 10 days
ubique.histvar(ubique.cat(1,x,y),0.99,100000,10);
// [[4427.19, 19289.9]]
```

