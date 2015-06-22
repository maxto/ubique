### median

Median value of array


#### Syntax

ubique.median(x,dim)


#### Description

Median value of array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
ubique.median([5,6,3]);
// 4.66667

ubique.median([[5,6,5],[7,8,-1]]);
// [ [ 5 ], [ 7 ] ]

ubique.median([[5,6,5],[7,8,-1]],1);
// [ [ 6, 7, 2 ] ]
```

