### interp1
Linear interpolation


#### Description

Linear interpolation. Returns the 1-D value of Y, given Xi query points.


|Params|Type|Description
|---------|----|-----------
|`x` | array | sample points
|`y` | array | corresponding values of sample points
|`new` | number/array | query points. For values outside [min(X),max(X)] NaN is returned.


#### Examples

```js
var x = [1,2,3,4,5,6];
var y = [2,4,6,8,10,12];
var xnew = [2,4,-2,10];

ubique.interp1(x,y,xnew); // [4, 8, NaN, NaN]
```

