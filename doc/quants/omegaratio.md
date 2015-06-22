### omegaratio

Omega ratio


#### Syntax

ubique.omegaratio(x,mar,dim)


#### Description

Omega ratio  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`mar` | number | minimum acceptable return (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.omegaratio(x);
// 8.782609

ubique.omegaratio(ubique.cat(0,x,y));
// [ [ 8.782609 ], [ 1.728324 ] ]
```

