### erfc

Complementary error function


#### Syntax

ubique.erfc(x)


#### Description

Complementary error function  
  
erfc(x) = 2/sqrt(pi) * integral from x to inf of exp(-t^2) dt  
erfc(x) = 1 - erf(x)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number | must be real


#### Examples

```js
ubique.erfc(0.5);
// 0.47950009227675744
```

