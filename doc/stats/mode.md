### mode

Most frequent value in an array of elements


#### Syntax

ubique.mode(x,dim)


#### Description

Most frequent value in an array of elements (Unimodal)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
ubique.mode([5,6,3]);
// 3

ubique.mode([[5,6,5],[7,8,-1]]);
// [ [ 5 ], [ -1 ] ]

ubique.mode([[5,6,5],[7,8,-1]],1);
// [ [ 5, 6, -1 ] ]
```

