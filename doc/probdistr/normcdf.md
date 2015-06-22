### normcdf

Normal cumulative distribution function (cdf)


#### Syntax

ubique.normcdf(x,mu,sigma)


#### Description

The Standard Normal Distribution: mu = 0 and sigma = 1  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number | number to calculate cdf
|`mu` | number | mean of  the array of elements
|`sigma` | number | standarf deviaton of array of elements


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

ubique.normcdf(2);
// 0.97725

ubique.normcdf(0,ubique.mean(x),ubique.std(x));
// 0.22049
```

