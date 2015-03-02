### gt
Greater than X > Y


#### Description

Greater than X > Y


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | left array
|`y` | number/array/matrix | right array


#### Examples

```js
ubique.gt(5,5);
// false
ubique.gt(5,[5,6,3]);
// [ false, false, true ]
ubique.gt(5,[[5,6],[3,5]]);
// [ [ false, false ], [ true, false ] ]
ubique.gt([5,6,3],5);
// [ false, true, false ]
ubique.gt([[5,6],[3,5]],5);
// [ [ false, true ], [ false, false ] ]
ubique.gt([5,6,3],[2,6,0]);
// [ true, false, true ]
ubique.gt([[5,6],[-1,2]],[[5,6],[3,5]]);
// [ [ false, false ], [ false, false ] ]
```

