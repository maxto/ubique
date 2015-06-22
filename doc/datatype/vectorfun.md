### vectorfun

Apply a function to each vector column or row of a matrix


#### Syntax

ubique.vectorfun()


#### Description

Apply a function to each vector column or row of a matrix. The syntax is:  
  
vectorfun(dim,x,func,arg1,arg2....)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/string/boolean/... | variable input arguments


#### Examples

```js
var testfun = function(a,b,c){return ubique.mean(a)*b+c;};

ubique.vectorfun(0,[[5,6,5],[7,8,-1]],testfun,5,10)
// [ [ 36.666667 ], [ 33.333333 ] ]

ubique.vectorfun(1,[[5,6,5],[7,8,-1]],testfun,5,10)
// [ [ 40, 45, 20 ] ]
```

