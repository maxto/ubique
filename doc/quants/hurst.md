### hurst
Hurst index/exponent


#### Description

It's a useful statistic for detecting if a time series is mean reverting (anti-persistent), totally random or persistent.A value in the range [0.5) indicates mean-reverting (anti-persistent)A value of 0.5 indicate a random walkA value H in the range (0.5,1] indicates momentum (persistent)


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`flag` | number | normalization value 0: population, 1:sample (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

ubique.hurst(x); // 0.344059
ubique.hurst(x,1); // 0.3669383
ubique.hurst(z); // [[0.344059, 0.51531]]
```

