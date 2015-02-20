### sharpe
Sharpe Ratio


#### Description

Sharpe Ratio.Compute Sharpe ratio for an array X of values (daily, weekly, etc) anda free-risk rate. Annual free-risk must be divided to match the right timeframe.


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |     array of value
|`frisk` | number | annual free-risk rate (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

ubique.sharpe(x,0.02/12); // 0.698794
ubique.sharpe(z); // [[0.770539, 0.23858]]
```

