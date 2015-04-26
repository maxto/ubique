### ror

Simple rate of return


#### Syntax

ubique.ror(x,type,dim)


#### Description

Simple rate of return calculated from the last and the first value of  
an array of numbers.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of returns or values
|`type` | string | type of values, 'ret' for returns, 'cum' for cumulative (def: 'ret')
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = [100,101,99,98,97,102,103,104];
var cat = ubique.cat;

ubique.ror(x);
// 0.187793

ubique.ror(z,'cum');
// 0.04

ubique.ror(cat(1,x,y),'ret');
// [ [ 0.187793, 0.125149 ] ]
```

