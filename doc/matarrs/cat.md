### cat

Concatenate arrays and matrices


#### Syntax

ubique.cat()


#### Description

Concatenate arrays and matrices along specified dimension as first argument  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/matrix... | variable arguments (0:rows, 1:columns)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [0.5,-3,2.3];
var f = [[3, 2], [5, 2]];

ubique.cat(0,a,b);
// [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9]]
ubique.cat(0,a,b,b);
// [[5, 6, 5], [7, 8, -1], [-1, 3, -1], [4, 5, 9], [-1, 3, -1], [4, 5, 9]]
ubique.cat(0,c,d);
// [5, 6, 3, 0.5, -3, 2.3]
ubique.cat(0,[1],[2]);
// [1, 2]
ubique.cat(0,5,7,9,8);
// [5,7,9,8]
ubique.cat(0,5,7,c);
// [5, 7, 5, 6, 3]
ubique.cat(1,a,b);
// [[5, 6, 5, -1, 3, -1], [7, 8, -1, 4, 5, 9]]
ubique.cat(1,a,b,f);
// [[5, 6, 5, -1, 3, -1, 3, 2], [7, 8, -1, 4, 5, 9, 5, 2]]
ubique.cat(1,a,[2,3]);
// [[5, 6, 5, 2], [7, 8, -1, 3]]
ubique.cat(1,5,6,7);
// [[5, 6, 7]]
```

