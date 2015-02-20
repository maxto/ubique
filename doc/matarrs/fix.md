### fix
Round toward zero


#### Description

Round toward zero


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | number or array of values


#### Examples

```js
ubique.fix(3.78); // 3
ubique.fix([4.51,-1.4]); // [4, -1]
ubique.fix([[4.51,-1.4],[3.78,0.01]]); // [[4, -1], [3, 0]]
```

