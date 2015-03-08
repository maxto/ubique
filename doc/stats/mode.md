### mode

Most frequent value in an array of elements


#### Syntax

ubique.mode(x,dim)


#### Description

Most frequent value in an array of elements (Unimodal)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.mode(c); // 3
ubique.mode(a,0); // [5, -1]
ubique.mode(a); // [[5, 6, -1]]
```

