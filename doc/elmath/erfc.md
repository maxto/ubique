### erfc
Complementary error function


#### Description

Complementary error functionerfc(x) = 2/sqrt(pi) * integral from x to inf of exp(-t^2) dterfc(x) = 1 - erf(x)


|Params|Type|Description
|---------|----|-----------
|`x` | number | must be real


#### Examples

```js
ubique.erfc(0.5); // 0.47950009227675744
```

