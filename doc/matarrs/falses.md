### falses()

Create array of all false


#### Description

Create array of all false  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... |  variable input arguments (max 2)


#### Examples

```js
ubique.falses(); // false
ubique.falses(0); // []
ubique.falses(1); / [[false]]
ubique.falses(2); // [[false, false], [false, false]]
ubique.falses([2,1]); // [[false], [false]]
ubique.falses(1,2); // [[false, false]]
ubique.falses(2,3); // [[false, false, false], [false, false, false]]
```

