### treynor

Treynor Ratio


#### Syntax

ubique.treynor(x,y,frisk,dim)


#### Description

Compute the Treynor ratio for an array X of values (daily, weekly, etc) and  
a free-risk rate. Annual free-risk must be divided to match the right timeframe.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array | array of X values
|`y` | array | array of Y values
|`frisk` | number |  free-risk rate (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
var cat = ubique.cat;

ubique.treynor(x,z,0.01/12);
// -0.095687

ubique.treynor(cat(0,x,y),z,0.01/12);
// [ [ -0.095687 ], [ 0.029863 ] ]
```

