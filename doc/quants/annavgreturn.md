### annavgreturn

Annualized average return


#### Syntax

ubique.annavgreturn(x,t,dim)


#### Description

Annualized average return  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | rate or return
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily (def: 252)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.annavgreturn(ubique.cat(1,x,y),12);
// 0.237261
ubique.annavgreturn(ubique.cat(1,x,y),12);
// [[0.237261, 0.162131]]
```

