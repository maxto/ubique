### range

Range of values


#### Syntax

ubique.range(x,dim)


#### Description

Range of values  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.range([5,6,3]);
// 3

ubique.range([[5,6,5],[7,8,-1]]);
// [ [ 1 ], [ 9 ] ]

ubique.range([[5,6,5],[7,8,-1]],1);
// [ [ 2, 2, 6 ] ]
```

