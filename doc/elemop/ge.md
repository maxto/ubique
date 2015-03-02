### ge
Greater than or equal to X >= Y


#### Description

Greater than or equal to X >= Y


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | left array
|`y` | number/array/matrix | right array


#### Examples

```js
ubique.ge(5,5);
// true
ubique.ge(5,[5,6,3]);
// [ true, false, true ]
ubique.ge(5,[[5,6],[3,5]]);
// [ [ true, false ], [ false, true ] ]
ubique.ge([5,6,3],5);
// [ true, true, false ]
ubique.ge([[5,6],[3,5]],5);
// [ [ true, true ], [ false, true ] ]
ubique.ge([5,6,3],[2,6,0]);
// [ false, true, false ]
ubique.ge([[5,6],[-1,2]],[[5,6],[3,5]]);
// [ [ true, true ], [ false, false ] ]
```

