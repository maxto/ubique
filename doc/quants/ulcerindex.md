### ulcerindex

Ulcer Index


#### Syntax

ubique.ulcerindex(x,mode,dim)


#### Description

Ulcer Index of Peter G. Martin (1987). The impact of long, deep drawdowns will have significant  
impact because the underperformance since the last peak is squared.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio matrix of equity time series with the oldest value in x[0] and the last one in x[N-1]
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

ubique.ulcerindex(x);
// 0.6344798231002222
ubique.ulcerindex([[0.003,0.026],[0.015,-0.009],[0.014,0.024],[0.015,0.066],[-0.014,0.039]],'return');
// [ [ 0.8651268372004445, 0.6301432708803503 ] ]
```

