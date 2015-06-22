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
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
ubique.ret2tick([0.5,-3,2.3],'simple',100);
// [ 100, 150, -300, -990 ]

ubique.ret2tick([[9, 5], [6, 1]],'simple',100);
// [ [ 100, 1000, 6000 ], [ 100, 700, 1400 ] ]
```

