### zeros
Create array or matrix of all zeros


#### Description

Create array or matrix of all zeros


|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... |  variable input arguments (max 2)


#### Examples

```js
ubique.zeros(); // 0
ubique.zeros(0); // []
ubique.zeros(1); / [[0]]
ubique.zeros(2); // [[0, 0], [0, 0]]
ubique.zeros([2,1]); // [[0], [0]]
ubique.zeros(1,2); // [[0, 0]]
ubique.zeros(2,3); // [[0, 0, 0], [0, 0, 0]]
```

