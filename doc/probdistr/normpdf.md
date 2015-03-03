### normpdf(x,mu,sigma)

Normal probability density function (pdf)


#### Description

Normal probability density function (pdf).  
Returns the pdf of the normal distribution with  
mean MU and standard deviation SIGMA, evaluated at the values in X  
  
Default values: MU = 0, SIGMA = 1  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number |     real value
|`mu` | number |    mean value (def: 0)
|`sigma` | number | standard deviation (def: 1)


#### Examples

```js
var y = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var mu = ubique.mean(y), sigma = ubique.std(y);

ubique.normpdf(1); // 0.241971
ubique.normpdf(0,mu,sigma); // 12.7622
```

