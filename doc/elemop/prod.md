### prod
Product of array elements


#### Description

Product of array elements


|Params|Type|Description
|---------|----|-----------
|`x` | `array|matrix` | array of values
|`dim` | `number` | dimension, 1: column 0: row (def: 1)


#### Examples

```js
ubique.prod([5,6,3]); // 14
ubique.prod([[5,6,5],[7,8,-1]],0); // [150, -56]
ubique.prod([[5,6,5],[7,8,-1]],1); // [[35, 48, -5]]
```

