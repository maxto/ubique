### rand
Uniformly distribuited pseudorandom numbers


#### Description

Uniformly distribuited pseudorandom numbers


|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... |  variable input arguments (max 2)


#### Examples

```js
ubique.rand(); // 0.1455961789470166
ubique.rand(0); // []
ubique.rand(1); // [[0.12391899712383747]]
ubique.rand(2); // [[0.33334478829056025, 0.09839745867066085],[0.6006140187382698, 0.3131265211850405]]
ubique.rand([2,1]); // [[0.40439655422233045], [0.7663801296148449]]
ubique.rand(1,2); // [[0.16782891773618758, 0.5958379742223769]]
ubique.rand(2,3); // [[0.890318026766181, 0.7398379456717521, 0.6165686929598451], [0.7234933257568628, 0.9895968120545149, 0.875643968814984]]
```

