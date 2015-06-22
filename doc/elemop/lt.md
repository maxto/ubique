### lt

Less than X < Y


#### Syntax

ubique.lt(x,y)


#### Description

Less than X < Y  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | left array
|`y` | number/array/matrix | right array


#### Examples

```js
ubique.lt(5,5);
// false

ubique.lt(5,[5,6,3]);
// [ false, true, false ]

ubique.lt(5,[[5,6],[3,5]]);
// [ [ false, true ], [ false, false ] ]

ubique.lt([5,6,3],5);
// [ false, false, true ]

ubique.lt([[5,6],[3,5]],5);
// [ [ false, false ], [ true, false ] ]

ubique.lt([5,6,3],[2,6,0]);
// [ false, false, false ]

ubique.lt([[5,6],[-1,2]],[[5,6],[3,5]]);
// [ [ false, false ], [ true, true ] ]
```

