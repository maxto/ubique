### tick2ret

Convert a value series to a return series


#### Syntax

ubique.tick2ret(x,mode,dim)


#### Description

Convert a value series to a return series. 'simple' (default) for simple returns, 'continuous' for continuously compounded  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of elements
|`mode` | string | method to compute returns. 'simple','continuous' (def: simple)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
ubique.tick2ret([0.5,-3,2.3]);
// [ -7, -1.766667 ]

ubique.tick2ret([[9, 5], [6, 1]]);
// [ [ -0.444444 ], [ -0.833333 ] ]
```

