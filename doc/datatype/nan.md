### nan
Create array of all NaN


#### Description

Create array of all NaN


|Params|Type|Description
|---------|----|-----------
|`args` | `number|array|...` |  variable input arguments (max 2)


#### Examples

```js
ubique.NaN(); // NaN
ubique.NaN(0); // []
ubique.NaN(1); / [[NaN]]
ubique.NaN(2); // [[NaN, NaN], [NaN, NaN]]
ubique.NaN([2,1]); // [[NaN], [NaN]]
ubique.NaN(1,2); // [[NaN, NaN]]
ubique.NaN(2,3); // [[NaN, NaN, NaN], [NaN, NaN, NaN]]
```

