### cagr
Compound annual growth rate


#### Description

Compound annual growth rate


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | rate or return
|`p` | number | period (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x2 = [100,98,101.5,103];
var y2 = [99.8,96.5,101.1,95.8];
var z2 = ubique.cat(1,x2,y2);

ubique.cagr(x2,4); // 0.00741707
ubique.cagr(z2,4); // [[0.00741707, -0.0101743]]
ubique.cagr(z2,2,0); // [-5.00375e-4, -0.00384869, -9.86681e-4, -0.0179535]
```

