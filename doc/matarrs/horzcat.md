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
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var f = [[3, 2], [5, 2]];

ubique.horzcat(a,b);
// [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
ubique.horzcat(a,b,f);
// [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
ubique.horzcat(a,[2,3]);
// [[5, 6, 5, 2], [7, 8, -1, 3]]
ubique.horzcat(5,6,7);
// [[5, 6, 7]]
ubique.horzcat(ubique.transpose(c));
// [[5, 5, 6, 3]]
```

