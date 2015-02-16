### arrayfun
Apply function to each element of array or matrix


#### Description

Apply function to each element of array or matrix


|Params|Type|Description
|---------|----|-----------
`x` | ``array|matrix`` |  array elements
`fun` | [function] | function to apply
`dim` | [number] | dimension selected, 0: row, 1: column (def: 0)


#### Examples

```js@example
ubique.arrayfun([1.4,2.3,3],Math.log); //  [0.336472, 0.832909, 1.09861]
ubique.arrayfun([1.4,0,-10],function(a) {return ubique.sign(a);});  // [1, 0, -1]
ubique.arrayfun([[5,6],[1,3]],Math.log); // [[1.60944, 1.79176], [0, 1.09861]]
ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);}) // [[1, 1, 1], [1, 1, -1]]
ubique.arrayfun([[5,6,5],[7,8,-1]],function(value) {return ubique.sign(value);},1) // [[1, 1], [1, 1], [1, -1]]
```

