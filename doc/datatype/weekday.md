### weekday

Day of week


#### Syntax

ubique.weekday(x)


#### Description

Returns a number representing the day of the week for each element in X.  
The ISO day of the week begins with 1 Monday, 2 Tuesday ... 7 Sunday.  
Based on [moment.js](http://momentjs.com)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number/array/matrix | serial date number (Unix)


#### Examples

```js
ubique.weekday(1426636800);
// 3

ubique.weekday([ 1424908800, 1426636800 ]);
// [ 4, 3 ]

ubique.weekday([ [ 1424908800, 1426636800 ], [ 1427328000, 1429315200 ] ]);
// [ [ 4, 3 ], [ 4, 6 ] ]
```

