### ulcerindex
Ulcer Index


#### Description

Ulcer Index of Peter G. Martin (1987). The impact of long, deep drawdowns will have significantimpact because the underperformance since the last peak is squared.


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |    asset/portfolio matrix of equity time series with the oldest value in x[0] and the last one in x[N-1]
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var xx = $u.cumprod($u.plus(x,1));
var yy = $u.cumprod($u.plus(y,1));
var zz = ubique.cat(1,xx,yy);

ubique.ulcerindex(xx); // 0.053
ubique.ulcerindex(zz,'return'); // [ [ 0.0053, 0.0595 ] ]
```

