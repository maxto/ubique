### twr(mv,cf)

True Time-weighted return measures the returns of the assets irrespective of the amount invested


#### Description

rue Time-weighted return measures the returns of the assets irrespective of the amount invested  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`mv` | array | array of market values
|`cf` | array | array of external cashflows (inflows/outflows)


#### Examples

```js
var mv = [250000,255000,257000,288000,293000,285000], cf = [0,0,25000,0,-10000,0];
ubique.twr(mv,cf);  //  0.07564769566198049
```

