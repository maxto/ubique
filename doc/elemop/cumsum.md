### cumsum
Cumulative sum of array elements


#### Description

Cumulative sum of array elements


|Params|Type|Description
|---------|----|-----------
|`x` | `array|matrix` | array or matrix of values
|`dim` | `number` | dimension selected, 1: column 0: row (def: 1)


#### Examples

```js
ubique.cumsum([5,6,3]); // [5, 11, 14]
ubique.cumsum([[5,6,5],[7,8,-1]]); // [[5, 6, 5], [12, 14, 4]]
ubique.cumsum([[5,6,5],[7,8,-1]],0); // [[5, 11, 16], [7, 15, 14]]
```

