### eye

Identity matrix


#### Syntax

ubique.eye()


#### Description

Identity matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... | variable input arguments (max 2)


#### Examples

```js
ubique.eye(0);
// []

ubique.eye(1);
// [ [ 1 ] ]

ubique.eye(2);
// [ [ 1, 0 ], [ 0, 1 ] ]

ubique.eye([2,1]);
// [ [ 1 ], [ 0 ] ]

ubique.eye(2,3);
// [ [ 1, 0, 0 ], [ 0, 1, 0 ] ]
```

