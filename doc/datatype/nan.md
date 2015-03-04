### nan

Create array of all NaN


#### Syntax

ubique.nan()


#### Description

Create array of all NaN  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... | variable input arguments (max 2)


#### Examples

```js
ubique.nan();
// NaN
ubique.nan(0);
// []
ubique.nan(1);
// [[NaN]]
ubique.nan(2);
// [[NaN, NaN], [NaN, NaN]]
ubique.nan([2,1]);
// [[NaN], [NaN]]
ubique.nan(1,2);
// [[NaN, NaN]]
ubique.nan(2,3);
// [[NaN, NaN, NaN], [NaN, NaN, NaN]]
```

