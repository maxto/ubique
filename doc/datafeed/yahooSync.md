### yahooSync

Download CSV Yahoo Finance historical (sync request)


#### Syntax

ubique.yahooSyncundefined


#### Description

Download CSV Yahoo Finance historical. Returns an object:  
  
{  
'symbol': options.symbol,  
'from': options.from,  
'to': options.to,  
'period': options.period,  
'date': nDate,  
'open': nOpen,  
'high': nHigh,  
'low': nLow,  
'close': nClose,  
'volume': nVolume,  
'adjclose': nAdjClose  
}  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`options` | object | options with fields:


#### Examples

```js
var options = { 'symbol': 'AAPL', 'from': '2015-01-02', 'to': '2015-01-08', 'period': 'd', 'fmt': 'YYYY-MM-DD' };

ubique.yahooSync.historical(options);
//
// { symbol: 'AAPL',
//     from: '2015-01-02',
//       to: '2015-01-08',
//   period: 'd',
//     date: [ '2015-01-02',
//             '2015-01-05',
//             '2015-01-06',
//             '2015-01-07',
//             '2015-01-08' ],
//             open: [ 111.39, 108.29, 106.54, 107.2, 109.23 ],
//             high: [ 111.44, 108.65, 107.43, 108.2, 112.15 ],
//             low: [ 107.35, 105.41, 104.63, 106.7, 108.7 ],
//             close: [ 109.33, 106.25, 106.26, 107.75, 111.89 ],
//             volume: [ 53204600, 64285500, 65797100, 40105900, 59364500 ],
//             adjclose: [ 108.44723, 105.3921, 105.40202, 106.87998, 110.98656 ] }
```

