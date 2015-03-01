### datenum
Convert date and time to serial date number (Unix)


#### Description

Convert date and time to serial date number (Unix).Based on [moment.js](http://momentjs.com)


|Params|Type|Description
|---------|----|-----------
|`d` | string/array/matrix | string or array of DATES
|`fmt` | string | format string (moment.js format)


#### Examples

```js
ubique.datenum('31-12-2014','DD-MM-YYYY');
// 1419980400
ubique.datenum(['31-12-2014','31-01-2015'],'DD-MM-YYYY');
// [ 1419980400, 1422658800 ]
ubique.datenum([['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']],'DD-MM-YYYY');
// [ [ 1419980400, 1422658800 ], [ 1423954800, 1425164400 ] ]
```

