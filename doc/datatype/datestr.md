### datestr
Convert serial date number (Unix) to string format


#### Description

Convert serial date number (Unix) to string format.Based on [moment.js](http://momentjs.com)


|Params|Type|Description
|---------|----|-----------
|`d` | number/array/matrix | ISO Unix datetime
|`fmt` | string | format string (moment.js format, default 'YYYY-MM-DD')


#### Examples

```js
ubique.datestr(1419980400);
// 2014-12-31
ubique.datestr([1419984000,1422662400],'DD-MMM-YY');
// [ '31-Dec-14', '31-Jan-15' ]
ubique.datestr([[1419980400,1422658800],[1423954800,1425164400]],'YY-MM-DD hh:mm:ss');
// [ [ '14-12-31 12:00:00', '15-01-31 12:00:00' ],
// [ '15-02-15 12:00:00', '15-03-01 12:00:00' ] ]
```

