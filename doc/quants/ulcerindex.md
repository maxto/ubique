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
|`x` | array/matrix | asset/portfolio returns
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var xt = [[0.003,0.026],[0.015,-0.009],[0.014,0.024],[0.015,0.066],[-0.014,0.039]];
ubique.ulcerindex(x);
// 0.005263

ubique.ulcerindex(xt,'return',1);
// [ [ 0.006261, 0.004025 ] ]
```

