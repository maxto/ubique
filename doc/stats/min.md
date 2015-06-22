### min

Smallest element in array


#### Syntax

ubique.min(x,dim)


#### Description

Smallest element in array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 0)


#### Examples

```js
ubique.min([5,6,-1]);
// -1

ubique.min([[-1,3,-1],[4,5,9]]);
// [ [ -1 ], [ 4 ] ]

ubique.min([[-1,3,-1],[4,5,9]],1);
// [ [ -1, 3, -1 ] ]
```

