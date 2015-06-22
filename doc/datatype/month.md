### month

Month of date


#### Syntax

ubique.month(x)


#### Description

Returns a number representing the month for each element in X.  
Months are 0 indexed, Jan is 0 and Dec is 11.  
Based on [moment.js](http://momentjs.com)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | serial date number (Unix)


#### Examples

```js
ubique.month(1424708525);
// 1

ubique.month([1414886399,1414972799]);
// [ 10, 10 ]

ubique.month([[1414886399,1414972799],[1415059199,1415145599]]);
// [ [ 10, 10 ], [ 10, 10 ] ]
```

