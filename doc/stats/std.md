### std

Standard deviation


#### Syntax

ubique.std(x,flag,dim)


#### Description

Standard deviation  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`flag` | number | normalization value 0: population, 1:sample (def: 1)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.std(c);
// 1.52753

ubique.std(c,0);
// 1.24722

ubique.std(a,0);
// [ [ 0.471405 ], [ 4.027682 ] ]

ubique.std(a,0,1);
// [ [ 1, 1, 3 ] ]
```

