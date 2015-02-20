### trues
Create array of all true


#### Description

Create array of all true


|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... |  variable input arguments (max 2)


#### Examples

```js
ubique.trues(); // true
ubique.trues(0); // []
ubique.trues(1); / [[true]]
ubique.trues(2); // [[true, true], [true, true]]
ubique.trues([2,1]); // [[true], [true]]
ubique.trues(1,2); // [[true, true]]
ubique.trues(2,3); // [[true, true, true], [true, true, true]]
```

