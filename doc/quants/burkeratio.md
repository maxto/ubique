### burkeratio

Burke Ratio


#### Syntax

ubique.burkeratio(x,frisk,t,mode,dim)


#### Description

A risk-adjusted measure with free risk and drawdowns.  
For the 'simple' mode the excess return over free risk is divided by the square root of  
the sum of the square of the drawdowns. For the 'modified' mode the Burke Ratio is multiplied  
by the square root of the number of datas.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`frisk` | number | annual free-risk rate (def: 0)
|`t` | number | frequency 252: daily (default), 52: weekly, 12: monthly, 4: quarterly
|`mode` | string | 'simple' or 'modified' (def: 'simple')
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var cat = ubique.cat;

ubique.burkeratio(x,0,12);
// 14.048563

ubique.burkeratio(x,0,12,'modified');
// 44.425456

ubique.burkeratio(cat(0,x,y),0,12);
// [ [ 14.048563 ], [ 1.228487 ] ]
```

