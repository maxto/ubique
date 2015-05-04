### yahoo

Yahoo Finance historical


#### Syntax

ubique.yahooundefined


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
// var options = {
// 'symbol': 'AAPL',
// 'from': '2015-01-01',
// 'to': '2015-05-01',
// 'period': 'd',
// 'YYYY-MM-DD'
// };
// ubique.yahoo.historical(args,function(err,data){
// console.log(data)
// });
//
```

