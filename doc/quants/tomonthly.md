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
var nd = ubique.datenum(['15-01-18','15-02-28','15-03-05','15-03-24','15-04-27'],'YY-MM-DD');
var nv = [100,99,102,103,98];
var nv2 = [1.2,1.1,1.3,1.4,0.9];
var nvm = ubique.cat(1,nv,nv2);

ubique.tomonthly(nd,nv);
// [ [ 1421535600, 1425078000, 1427151600, 1430085600 ],
// [ 100, 99, 103, 98 ] ]
ubique.tomonthly(nd,nvm);
// [ [ 1421535600, 1425078000, 1427151600, 1430085600 ],
[ [ 100, 1.2 ], [ 99, 1.1 ], [ 103, 1.4 ], [ 98, 0.9 ] ] ]
```

