### xkurtosis

Excess kurtosis


#### Syntax

ubique.xkurtosis(x,flag,dim)


#### Description

Excess kurtosis  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of elements
|`flag` | number | 0: bias correction, 1: simple (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.xkurtosis(x);
// 0.037581

ubique.xkurtosis(ubique.cat(0,x,y));
// [ [ 0.037581 ], [ -1.602358 ] ]
```

