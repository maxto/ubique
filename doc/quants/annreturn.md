### annreturn

Annualized Return


#### Syntax

ubique.annreturn(x,scale,type,dim)


#### Description

Average annualized returns over a period, convenient when comparing returns.  
It can be an Arithmetic or Geometric (default) average return: if compounded with itself the  
geometric average will be equal to the cumulative return  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`scale` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
|`type` | string | 'geometric' or 'simple' (def: 'geometric')


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.annreturn(x,12);
// 0.233815

ubique.annreturn(cat(1,x,y),12);
// [ [ 0.233815, 0.14509 ] ]
```

