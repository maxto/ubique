### subset
Subset of array or matrix based on X,Y coordinates


#### Description

Subset of array or matrix based on X,Y coordinates


|Params|Type|Description
|---------|----|-----------
|`m` | array/matrix | array or matrix of elements
|`r` | number/array | indexing for rows
|`c` | number/array | indexing for columns


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.subset(c,1); // 6
ubique.subset(c,[1,2]); // [6, 3]
ubique.subset(c,ubique.end(c)); 3
ubique.subset(a,0,1); // [[6]]
ubique.subset(a,[0,1],[1,2]); // [[6, 5], [8, -1]]
```

