### tomonthly

Convert a time series to a monthly frequency


#### Syntax

ubique.tomonthly(nd,nv)


#### Description

Convert a time series to a monthly frequency. Default: all days  
in the range.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`nd` | array | array of unix dates
|`nv` | array/matrix | array or matrix of values


#### Examples

```js
ubique.tomonthly(ubique.datenum(['15-01-18','15-02-28','15-03-05','15-03-24','15-04-27'],'YY-MM-DD'),[100,99,102,103,98]);
// [ [ 1421539200, 1425081600, 1427155200, 1430092800 ], [ 100, 99, 103, 98 ] ]
```

