### mad

Mean absolute deviation


#### Syntax

ubique.mad(x,dim)


#### Description

Mean absolute deviation  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.mad(c);
// 1.11111

ubique.mad(a,1);
// [ [ 1, 1, 3 ] ]

ubique.mad(a);
// [ [ 0.444444 ], [ 3.777778 ] ]
```

