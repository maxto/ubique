### drawdown

Drawdown


#### Syntax

ubique.drawdown(x,mode,dim)


#### Description

Any continuous losing return period. Return drawdown from peak and time to recovery arrays  
  
Returns an object with:  
  
dd (drawdown array)  
ddrecov (drawdown recovery index)  
maxdd (max drawdown)  
maxddrecov (max drawdown recovery period): [start period, end period]  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio matrix of equity time series with the oldest value in x[0] and the last one in x[N-1]
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.drawdown(ubique.cumprod(ubique.plus(x,1)));
// { dd: [ 0, 0, 0, 0.00900000000000004, 0, 0, 0, 0, 0.013999999999999995, 0 ],
//   ddrecov: [ 0, 0, 0, 4, 0, 0, 0, 0, 9, 0 ],
//   maxdd: 0.013999999999999995,
//   maxddrecov: [ 8, 9 ] }

ubique.drawdown(ubique.cat(1,ubique.cumprod(ubique.plus(x,1)),ubique.cumprod(ubique.plus(y,1))));
// [ [ { dd: [Object],
//     ddrecov: [Object],
//     maxdd: 0.013999999999999995,
//     maxddrecov: [Object] },
//   { dd: [Object],
//     ddrecov: [Object],
//     maxdd: 0.1092809191007261,
//     maxddrecov: [Object] } ] ]
```

