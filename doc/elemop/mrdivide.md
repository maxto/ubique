### mrdivide(x,y)

Matrix division X / Y


#### Description

Matrix division X / Y. If X is MxN and Y is NxN, then  
it returns a matrix MxN. X is multiplied with the inverse of Y. Y must be square.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values
|`y` | number/array/matrix | number or array of values


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];
var c = [5,6,3];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];
var e = [[9, 5], [6, 1]];
var f = [[3, 2], [5, 2]];
var l = [[1,1,-1],[1,-2,3],[2,3,1]];

ubique.mrdivide(5,6); // 0.833333
ubique.mrdivide(c,6); // [0.833333, 1, 0.5]
ubique.mrdivide(e,5); // [[1.8, 1], [1.2, 0.2]]
ubique.mrdivide(e,f); // [[1.75, 0.75], [-1.75, 2.25]]
ubique.mrdivide(a,l); // [[-0.769231, 0.538462, 2.61538], [3.38462, 0.230769, 1.69231]]
```

