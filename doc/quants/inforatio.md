### inforatio

Information Ratio


#### Syntax

ubique.inforatio(x,y,dim)


#### Description

Information Ratio  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`y` | array | benchmark returns
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];

ubique.inforatio(x,y);
// 0.0936915

ubique.inforatio(ubique.cat(0,x,y),z);
// [ [ 0.026302 ], [ -0.059705 ] ]
```

