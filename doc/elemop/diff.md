### diff
Differences between adjacent elements in array


#### Description

Differences between adjacent elements in array or matrix


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
ubique.diff([5,6,3]); //  [1, -3]
ubique.diff([[5,6,5],[7,8,-1]]); // [[2, 2, -6]]
ubique.diff([[5,6,5],[7,8,-1]],0); // [[1, -1], [1, -9]]
```

