### eye
Identity matrix


#### Description

Identity matrix


|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... |  variable input arguments (max 2)


#### Examples

```js
ubique.eye(); // 1
ubique.eye(0); // []
ubique.eye(1); / [[1]]
ubique.eye(2); // [[1, 0], [0, 1]]
ubique.eye([2,1]); // [[1], [0]]
ubique.eye(1,2); // [[1, 0]]
ubique.eye(2,3); // [[1, 0, 0], [0, 1, 0]]
```

