### range(x,dim)

Range of values


#### Description

Range of values  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.range(c); // 3
ubique.range(a,0); // [1,9]
ubique.range(a); // [[2, 2, 6]]
```

