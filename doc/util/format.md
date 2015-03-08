### format

Set display format for output (numbers)


#### Syntax

ubique.format (x,k)


#### Description

Set display format for output (numbers)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | input element
|`k` | number | number of decimals (def: 4 decimals)


#### Examples

```js
ubique.format(5.6677798348349,0);
// 6
ubique.format([4.5565667,0.000002323234]);
// [ 4.5565, 0 ]
ubique.format([[-1000.47748,0.000002],[0.1483478,10.111100]],2);
// [ [ -1000.48, 0 ], [ 0.15, 10.11 ] ]
```

