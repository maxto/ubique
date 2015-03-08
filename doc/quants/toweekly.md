### toweekly

Convert a time series to a weekly frequency


#### Syntax

ubique.toweekly(nd,nv)


#### Description

Convert a time series to a weekly frequency. Default: all days  
in the range. Example: daily dates [Wed,...Fri,...Mon,...Fri,...Thu] will become  
[Wed,...,Fri...,Fri...,Thu]  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`nd` | array | array of unix dates
|`nv` | array/matrix | array or matrix of values


#### Examples

```js
var nd = ubique.datenum(['15-01-15','15-01-23','15-01-30','15-02-04'],'YY-MM-DD');
var nv = [100,99,102,103,98];
var nv2 = [1.2,1.1,1.3,1.4,0.9];
var nvm = ubique.cat(1,nv,nv2);

ubique.toweekly(nd,nv);
// [ [ 1421276400, 1421967600, 1422572400, 1423004400 ],
// [ 100, 99, 102, 103 ] ]
ubique.toweekly(nd,nvm);
// [ [ 1421276400, 1421967600, 1422572400, 1423004400 ],
// [ [ 100, 1.2 ], [ 99, 1.1 ], [ 102, 1.3 ], [ 103, 1.4 ] ] ]
```

