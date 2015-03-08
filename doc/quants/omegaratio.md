### omegaratio

omegaratio ratio


#### Syntax

ubique.omegaratio(x,mar,dim)


#### Description

omegaratio ratio  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`mar` | number | minimum acceptable return (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.omegaratio(x);
// 8.7826
ubique.omegaratio(ubique.cat(1,x,y));
// [ [ 8.7826, 1.7283 ] ]
```

