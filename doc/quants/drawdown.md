### drawdown

Drawdown


#### Syntax

ubique.drawdown(x,mode,dim)


#### Description

Drawdowon from Peak.Any continuous losing return period.  
Return drawdown from peak and time to recovery array.  
  
Returns an object with:  
  
dd (drawdown array)  
ddrecov (drawdown recovery index)  
maxdd (max drawdown)  
maxddrecov (max drawdown recovery period): [start period, end period]  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | asset/portfolio returns
|`mode` | string | drawdown calculation. 'return','geometric' (def: 'return')
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

ubique.drawdown(x);
// { dd: [ 0, 0, 0, 0.009, 0, 0, 0, 0, 0.014, 0 ], ddrecov: [ 0, 0, 0, 4, 0, 0, 0, 0, 9, 0 ],
//   maxdd: 0.014, maxddrecov: [ 8, 9 ] }
```

