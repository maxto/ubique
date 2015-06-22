### le

Less than or equal to X <= Y


#### Syntax

ubique.le(x,y)


#### Description

Less than or equal to X <= Y  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | left array
|`y` | number/array/matrix | right array


#### Examples

```js
ubique.le(5,5);
// true

ubique.le(5,[5,6,3]);
// [ true, true, false ]

ubique.le(5,[[5,6],[3,5]]);
// [ [ true, true ], [ false, true ] ]

ubique.le([5,6,3],5);
// [ true, false, true ]

ubique.le([[5,6],[3,5]],5);
// [ [ true, false ], [ true, true ] ]

ubique.le([5,6,3],[2,6,0]);
// [ false, true, false ]

ubique.le([[5,6],[-1,2]],[[5,6],[3,5]]);
// [ [ true, true ], [ true, true ] ]
```

