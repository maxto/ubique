### moment

Central moments


#### Syntax

ubique.moment(x,k,dim)


#### Description

Central moments. First moment is zero, second is variance.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or amatrix of elements
|`k` | number | k-th central sample moment
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.moment(x,3);
// 0.000007

ubique.moment(x,1);
// 0

ubique.moment(ubique.cat(0,x,y),2);
// [ [ 0.000486 ], [ 0.00251 ]
```

