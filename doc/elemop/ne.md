### ne
Inequality X !== Y


#### Description

Inequality X !== Y


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | left array
|`y` | number/array/matrix | right array


#### Examples

```js
ubique.ne(5,5);
// false
ubique.ne(5,[5,6,3]);
// [ false, true, true ]
ubique.ne(5,[[5,6],[3,5]]);
// [ [ false, true ], [ true, false ] ]
ubique.ne([5,6,3],5);
// [ false, true, true ]
ubique.ne([[5,6],[3,5]],5);
// [ [ false, true ], [ true, false ] ]
ubique.ne([5,6,3],[2,6,0]);
// [ true, false, true ]
ubique.ne([[5,6],[-1,2]],[[5,6],[3,5]]);
// [ [ false, false ], [ true, true ] ]
```

