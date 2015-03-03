### clone(x)

Create a clone of the input array or matrix


#### Description

Create a clone of the input array or matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix


#### Examples

```js
var b = [[-1,3,-1],[4,5,9]];
var c = [5,6,3];
var d = [[[5]]];

ubique.clone(b); // [[-1,3,-1],[4,5,9]]
ubique.clone(c); // [5,6,3]
ubique.clone(d): // [[[5]]]
```

