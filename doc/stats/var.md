### var
Variance


#### Description

Variance


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`flag` | number | normalization value 0: population, 1:sample (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.variance(c); // 2.33333
ubique.variance(c,0); // 1.55556
ubique.variance(a,0); // [[2, 2, 18]]
ubique.variance(a,0,0); // [0.222222, 16.2222]
```

