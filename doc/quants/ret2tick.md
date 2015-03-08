### ret2tick

Convert a return series to a value series with a start value


#### Syntax

ubique.ret2tick(x,mode,sval,dim)


#### Description

Convert a return series to a value series with a start value  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of elements
|`mode` | string | method to compute returns. 'simple','continuous' (def: simple)
|`sval` | number | start value (def: 1)


#### Examples

```js
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];

ubique.ret2tick(0.05);
// [1, 1.05]
ubique.ret2tick(d,'simple',100);
// [100, 150, -300, -990]
ubique.ret2tick(e,'simple',100,0);
// [[100, 1000, 6000], [100, 700, 1400]]
```

