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
|`sval` | number | start value (def: 1)


#### Examples

```js
var d = [0.5,-3,2.3];
var e = [[9, 5], [6, 1]];

ubique.tick2ret(d);
// [-7, -1.76667]
ubique.tick2ret(e);
// [[-0.333333, -0.8]]
```

