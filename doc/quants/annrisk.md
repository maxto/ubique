### annrisk

Annualized Risk


#### Syntax

ubique.annrisk(x,t,dim)


#### Description

Annualized standard deviation of asset/portfolio returns  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.annrisk(x,12);
// 0.233815

ubique.annrisk(cat(1,x,y),12);
// [ [ 0.233815, 0.14509 ] ]
```

