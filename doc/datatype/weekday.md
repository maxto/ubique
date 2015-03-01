### weekday
Day of week


#### Description

Returns a number representing the day of the week for each element in X.The ISO day of the week begins with 1 Monday, 2 Tuesday ... 7 Sunday.Based on [moment.js](http://momentjs.com)


|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | serial date number (Unix)


#### Examples

```js
ubique.weekday(1424708525);
// 9
ubique.weekday([1414886399,1414972799]);
// [ 6, 7 ]
ubique.weekday([[1414886399,1414972799],[1415059199,1415145599]]);
// [ [ 6, 7 ], [ 1, 2 ] ]
```

