### jbtest

Jarque-Bera test


#### Syntax

ubique.jbtest(x)


#### Description

A test decition for the null hypothesis that the data  
in array X comes from a normal distribution with an unknown mean and variance  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array | array of values


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];

ubique.jbtest(x);
// 0.6360604293924916
```

