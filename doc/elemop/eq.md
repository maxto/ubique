### eq
Equality X === Y


#### Description

Equality X === Y


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | left array
|`y` | number/array/matrix | right array


#### Examples

```js
ubique.eq(5,5);
// true
ubique.eq(5,[5,6,3]);
// [ true, false, false ]
ubique.eq(5,[[5,6],[3,5]]);
// [ [ true, false ], [ false, true ] ]
ubique.eq([5,6,3],5);
// [ true, false, false ]
ubique.eq([[5,6],[3,5]],5);
// [ [ true, false ], [ false, true ] ]
ubique.eq([5,6,3],[2,6,0]);
// [ false, true, false ]
ubique.eq([[5,6],[-1,2]],[[5,6],[3,5]]);
// [ [ true, true ], [ false, false ] ]
```

