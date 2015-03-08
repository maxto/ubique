### xkurtosis

Excess kurtosis


#### Syntax

ubique.xkurtosis(x,flag,dim)


#### Description

Excess kurtosis  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |  array or matrix of elements
|`flag` | number |     0: bias correction, 1: simple (def: 1)
|`dim` | number |      dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

ubique.xkurtosis(x); // 0.0375811
ubique.xkurtosis(x,0); // 1.03072
ubique.xkurtosis(z); // [[0.0375811, -1.60236]]
```

