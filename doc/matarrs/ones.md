### ones

Create array of all ones


#### Syntax

ubique.ones()


#### Description

Create array of all ones  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... | variable input arguments (max 2)


#### Examples

```js
ubique.ones();
// 1
ubique.ones(0);
// []
ubique.ones(1);
// [[1]]
ubique.ones(2);
// [[1, 1], [1, 1]]
ubique.ones([2,1]);
// [[1], [1]]
ubique.ones(1,2);
// [[1, 1]]
ubique.ones(2,3);
// [[1, 1, 1], [1, 1, 1]]
```

