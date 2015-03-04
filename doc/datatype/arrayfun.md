### arrayfun

Apply function to each element of array or matrix


#### Syntax

ubique.arrayfun(x,fun,dim)


#### Description

Apply function to each element of array or matrix  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |  array elements
|`fun` | function | function to apply
|`dim` | number | dimension selected, 0: row, 1: column (def: 0)


#### Examples

```js
var x = [1.4,2.3,3];

ubique.arrayfun(x,Math.log);
// [ 0.3364722366212129, 0.8329091229351039, 1.0986122886681098 ]
ubique.arrayfun([1.4,0,-10],function(a) {return ubique.sign(a);});
// [ 1, 0, -1 ]
ubique.arrayfun([[5,6],[1,3]],Math.log);
// [[1.60944, 1.79176], [0, 1.09861]]
ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);});
// [[1, 1, 1], [1, 1, -1]]
ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);},1);
// [[1, 1], [1, 1], [1, -1]]
```

