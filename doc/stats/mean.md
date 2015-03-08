### mean

Average value of array


#### Syntax

ubique.mean(x,dim)


#### Description

Average value of array  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array of values
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];

ubique.mean(c);
// 4.66667
ubique.mean(a,0);
// [5.33333, 4.66667]
ubique.mean(a);
// [6, 7, 2]
```

