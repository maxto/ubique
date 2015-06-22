### horzcat

Concatenate arrays or matrices horizontally


#### Syntax

ubique.horzcat()


#### Description

Concatenate arrays or matrices horizontally  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | array/matrix/... | variable arguments (args1,args2,...)


#### Examples

```js
ubique.horzcat([[5,6,5],[7,8,-1]],[[-1,3,-1],[4,5,9]]);
// [ [ 5, 6, 5, -1, 3, -1 ], [ 7, 8, -1, 4, 5, 9 ] ]

ubique.horzcat(5,6,7);
// [ [ 5, 6, 7 ] ]

```

