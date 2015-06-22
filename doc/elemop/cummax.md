### cummax

Cumulative max of array elements


#### Syntax

ubique.cummax(x,dim)


#### Description

Cumulative max of array elements  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
ubique.cummax([5,6,3]);
// [ 5, 6, 6 ]

ubique.cummax([[5,6,5],[7,8,-1]]);
// [ [ 5, 6, 5 ], [ 7, 8, 5 ] ]

ubique.cummax([[5,6,5],[7,8,-1]],0);
// [ [ 5, 6, 6 ], [ 7, 8, 8 ] ]
```

