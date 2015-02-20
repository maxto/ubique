### mad
Mean absolute deviation


#### Description

Mean absolute deviation


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.mad(c); // 1.11111
ubique.mad(a,0); // [0.444444, 3.77778]
ubique.mad(a); // [[1, 1, 3]]
```

