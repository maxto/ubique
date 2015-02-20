### norminv
Inverse of the normal cumulative distribution function (cdf)


#### Description

Returns the inverse cdf for the normal distribution with mean MUand standard deviation SIGMA at P valueDefault values: MU = 0, SIGMA = 1


|Params|Type|Description
|---------|----|-----------
|`p` | number |     probability value in range [0,1]
|`mu` | number |    mean value
|`sigma` | number | standard deviation


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var p = 0.01, mu = ubique.mean(x), sigma = ubique.std(x);

ubique.normiv(0.05); // -1.64485
ubique.norminv(p,mu,sigma); // -0.0361422
```

