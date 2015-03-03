### percpos(x,dim)

Percentage of positive values in array or matrix


#### Description

Percentage of positive values in array or matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of elements
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var z = ubique.cat(1,x,y);

ubique.percpos(x); // 0.8
ubique.percpos(z); // [[0.8, 0.5]]
ubique.percpos(z,0); // [0.5, 1, 1, 0, 0.5, 1, 0.5, 0.5, 0.5, 1]
```

