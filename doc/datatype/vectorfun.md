### vectorfun
Apply a function to each vector column or row of a matrix


#### Description

Apply a function to each vector column or row of a matrix


|Params|Type|Description
|---------|----|-----------
|`x` | `array|matrix` |   input matrix
|`fun` | `function` | function to apply
|`dim` | `number` | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var a = [[5,6,5],[7,8,-1]];

ubique.vectorfun(a,function(val){return ubique.mean(val)},0); // [5.33333, 4.66667]
ubique.vectorfun(a,function(val){return ubique.mean(val)},1); // [[6, 7, 2]]
```

