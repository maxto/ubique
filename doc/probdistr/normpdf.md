### normpdf

Normal probability density function (pdf)


#### Syntax

ubique.normpdf(x,mu,sigma)


#### Description

Normal probability density function (pdf).  
Returns the pdf of the normal distribution with  
mean MU and standard deviation SIGMA, evaluated at the values in X  
  
Default values: MU = 0, SIGMA = 1  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number | real value
|`mu` | number | mean value (def: 0)
|`sigma` | number | standard deviation (def: 1)


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

ubique.normpdf(1);
// 0.241971

ubique.normpdf(0,ubique.mean(x),ubique.std(x));
// 12.7622
```

