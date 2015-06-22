### activereturn

Active return


#### Syntax

ubique.activereturn(x,y,t,mode,dim)


#### Description

Asset/Portfolio annualized return minus Benchmark annualized return  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`y` | array | benchmark returns
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
|`mode` | string | 'geometric' or 'simple' (def: 'geometric')
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
var cat = ubique.cat;

ubique.activereturn(x,z,12);
// 0.041979

ubique.activereturn(cat(0,x,y),z,12);
// [ [ 0.041979], [ -0.046746 ] ]
```

