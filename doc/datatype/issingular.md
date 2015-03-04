### issingular

True for singular matrix


#### Syntax

ubique.issingular(x)


#### Description

True for singular matrix. A square matrix which does not have an inverse. A matrix is singular if and only if its determinant is zero.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | matrix | input matrix


#### Examples

```js
ubique.issingular([[2,6],[1,3]]);
// false
```

