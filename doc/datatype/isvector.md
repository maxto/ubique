### isvector

True for vector input


#### Syntax

ubique.isvector(x)


#### Description

True for vector input. Vector can have the same dimension of array but array is array and vector  
is an array of array (= matrix with 1 column or row)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | matrix with dimension Mx1 or 1xN


#### Examples

```js
ubique.isvector([[5,6,7]]);
// true

ubique.isvector([[5],[6],[7]]);
// true
```

