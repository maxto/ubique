### arrayfun

Apply function to each element of an array or matrix


#### Syntax

ubique.arrayfun()


#### Description

Apply function to each element of an array or matrix. First arg is input element, the second one the function to apply,  
then the parameters of the function.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/string/boolean/... | variable input arguments


#### Examples

```js
ubique.arrayfun([1.4,2.3,3],Math.log);
// [ 0.336472, 0.832909, 1.098612 ]

ubique.arrayfun([1.4,0,-10],ubique.sign);
// [ 1, 0, -1 ]

ubique.arrayfun([[5,6],[1,3]],Math.pow,3);
// [ [ 125, 216 ], [ 1, 27 ] ]

ubique.arrayfun([['cat','concat'],['cattle','catch the catfish']],ubique.strfind,'cat');
// [ [ [ 0 ], [ 3 ] ], [ [ 0 ], [ 0, 10 ] ] ]

ubique.arrayfun([null,true,'hello',5,NaN],ubique.isnull);
// [ true, false, false, false, false ]

ubique.arrayfun([null,true,'hello',5,NaN],ubique.islogical);
// [ false, true, false, false, false ]

ubique.arrayfun([null,true,'hello',5,NaN],ubique.isstring);
// [ false, false, true, false, false ]

ubique.arrayfun([null,true,'hello',5,NaN],ubique.isnumber);
// [ false, false, false, true, true ]

ubique.arrayfun([null,true,'hello',5,{},undefined,'NaN',NaN],ubique.isnan);
// [ false, false, false, false, false, false, false, true ]
```

