### subset(m,r,c)

Subset of array or matrix based on X,Y coordinates


#### Description

Subset of array or matrix based on X,Y coordinates.  
Extract a single column or row with the symbols ':'  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`m` | array/matrix | array or matrix of elements
|`r` | number/array/string | indexing for rows or ':' for all rows
|`c` | number/array/string | indexing for columns or ':' for all columns


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.subset(c,1);
// 6
ubique.subset(c,[1,2]);
// [ 6, 3 ]
ubique.subset(c,ubique.end(c));
// 3
ubique.subset(a,0,1);
// [ [ 6 ] ]
ubique.subset(a,[0,1],[1,2]);
// [ [ 6, 5 ], [ 8, -1 ] ]
ubique.subset(a,0,':');
[ [ 5, 6, 5 ] ]
ubique.subset(a,':',0);
[ [ 5 ], [ 7 ] ]
```

