### sort

Sort array elements in ascending/descending order


#### Syntax

ubique.sort(x,mode,dim)


#### Description

Sort array elements in ascending/descending order. For matrix it is possibile to sort  
along a dimension. Based on Merge Sort algorithm  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of elements
|`mode` | string | sorting direction, 'ascend' (default) or 'descend'
|`dim` | number | dimension along which to sort, 0: rows, 1: colums (def: 1)


#### Examples

```js
ubique.sort([0,5,-1,3,-4,9,0],'ascend');
// [ -4, -1, 0, 0, 3, 5, 9 ]

ubique.sort([[-1,3,-1],[4,5,9]],'descend');
// [ [ 4, 5, 9 ], [ -1, 3, -1 ] ]

ubique.sort([[-1,3,-1],[4,5,9]],'descend',0);
// [ [ 3, -1, -1 ], [ 9, 5, 4 ] ]
```

