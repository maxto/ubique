### prctile

Percentiles of a sample


#### Syntax

ubique.prctile(x,p,dim)


#### Description

Percentiles of a sample, inclusive  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of emlements
|`p` | number | p-th percentile in the range [0,100]
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.prctile(x,5);
// -0.014
ubique.prctile(x,33);
// 0.0118
ubique.prctile(ubique.cat(1,x,y),5,0);
// [-0.005, 0.026, 0.015, -0.037, -0.061, 0.024, -0.049, -0.021, -0.014, 0.039]
```

