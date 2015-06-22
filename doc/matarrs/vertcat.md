### vertcat

Concatenate arrays or matrices vertically


#### Syntax

ubique.vertcat()


#### Description

Concatenate arrays or matrices vertically  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | array/matrix/... | variable arguments (args1,args2,...)


#### Examples

```js
ubique.vertcat([[5,6,5],[7,8,-1]],[[-1,3,-1],[4,5,9]]);
// [ [ 5, 6, 5 ], [ 7, 8, -1 ], [ -1, 3, -1 ], [ 4, 5, 9 ] ]

ubique.vertcat(5,7,9,8);
// [ 5, 7, 9, 8 ]
```

