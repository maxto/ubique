### histc(x,bins,dim)

Histogram count


#### Description

For array X counts the number of values in X that fall between the elements in the BINS array. Values outside the range in BINS are not counted.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix |     array or matrix of values
|`bins` | number/array |  number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
|`dim` | number | dimension 0: row, 1: column (def: 1)


#### Examples

```js
var n = [87,27,45,62,3,52,20,43,74,61];
var q = [[89,23,12],[34,5,70]];
var bins = [0,20,40,60,80,100];

ubique.histc(n,bins);
// [ { bins: 0, freq: 1 },
// { bins: 20, freq: 2 },
// { bins: 40, freq: 3 },
// { bins: 60, freq: 3 },
// { bins: 80, freq: 1 },
// { bins: 100, freq: 0 } ]

ubique.histc(q,2,1);
// [ [ { bins: 34, freq: 1 },
//   { bins: 5, freq: 1 },
//  { bins: 12, freq: 1 } ],
// [ { bins: 61.5, freq: 0 },
//   { bins: 14, freq: 0 },
//   { bins: 41, freq: 0 } ],
// [ { bins: 89, freq: 1 },
//   { bins: 23, freq: 1 },
//  { bins: 70, freq: 1 } ] ]
```

