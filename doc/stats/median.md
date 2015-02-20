### median
Median value of array


#### Description

Median value of array


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.median(c); // 4.66667
ubique.median(a,0); // [5.33333, 4.66667]
ubique.median(a); // [6, 7, 2]
```

