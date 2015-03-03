### normcdf(x,mu,sigma)

Normal cumulative distribution function (cdf)


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
var y = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var mu = ubique.mean(x), sigma = ubique.std(x);

ubique.normcdf(2); // 0.97725
ubique.normcdf(0,mu,sigma); // 0.22049
```

