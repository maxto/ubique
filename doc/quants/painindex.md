### painindex

Pain Index


#### Syntax

ubique.painindex(x,mode,dim)


#### Description

Mean value of the drawdowns, similar to Ulcer Index.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.painindex(x);
// 0.0023

ubique.painindex(cat(0,x,y));
// [ [ 0.0023 ], [ 0.042955 ] ]
```

