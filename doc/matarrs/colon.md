### colon
Array of numbers from L to U with step S


#### Description

Array of numbers from L to U with step S


|Params|Type|Description
|---------|----|-----------
|`l` | number | lower value of the array
|`u` | number | upper value of the array
|`s` | number | step value (def: 1)


#### Examples

```js
ubique.colon(1,10,1); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ubique.colon(10,1,1); //  []
ubique.colon(-5,5,2); // [-5, -3, -1, 1, 3, 5]
ubique.colon(-7,14,2); // [-7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13]
```

