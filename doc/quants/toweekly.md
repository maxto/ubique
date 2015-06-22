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
ubique.toweekly(ubique.datenum(['15-01-15','15-01-23','15-01-30','15-02-04'],'YY-MM-DD'),[100,99,102,103,98]);
// [ [ 1421280000, 1421971200, 1422576000, 1423008000 ],[ 100, 99, 102, 103 ] ]
```

