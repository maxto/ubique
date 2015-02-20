### squeeze
Remove singleton dimensions from N-D arrays (matrices)


#### Description

Remove singleton dimensions N_D arrays (matrices).Number returns number and 1-D array returns 1-D array.


|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |  matrix values


#### Examples

```js

ubique.squeeze([[[[[8]]]]]); // [[8]]
ubique.squeeze([[[[3,4,5]]]]); // [[3, 4, 5]]
```

