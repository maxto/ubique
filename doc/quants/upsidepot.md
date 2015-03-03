### upsidepot(x,mar,dim)

Upside potential


#### Description

Upside potential  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |   array or matrix of values
|`mar` | number | minimum acceptable return (def: 0)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

ubique.upsidepot(x,0.1/100); // 0.0194
ubique.upsidepot(z); // [[0.0202, 0.0299]]
```

