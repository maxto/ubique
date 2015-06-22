### squeeze

Remove singleton dimensions from N-D arrays (matrices)


#### Syntax

ubique.squeeze(x)


#### Description

Remove singleton dimensions N_D arrays (matrices).  
Number returns number and 1-D array returns 1-D array.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | string/number/array/matrix | elements of X


#### Examples

```js
ubique.squeeze([[[[[8]]]]]);
// [ [ 8 ] ]

ubique.squeeze([[[[3,4,5]]]]);
// [ [3, 4, 5] ]

ubique.squeeze([[[[[['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']]]]]]);
// [ [ '31-12-2014', '31-01-2015' ],[ '15-02-2015', '01-03-2015' ] ]
```

