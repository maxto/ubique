### histc

Histogram count


#### Syntax

ubique.histc(x,bins,dim)


#### Description

For array X counts the number of values in X that fall between the elements in the BINS array. Values outside the range in BINS are not counted.  
  
Returns an object with:  
  
bins - number of bins  
count - number of matched elements  
freq - frequency  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | array or matrix of values
|`bins` | number/array | number of bins (as NUMBER) or array of edges (as ARRAY) (def: 10)
|`dim` | number | dimension 0: row, 1: column (def: 0)


#### Examples

```js
var A = [87,27,45,62,3,52,20,43,74,61];
var B = [12,34,57,43,88,75,89,2,27,29];

ubique.histc(A,[0,20,40,60,80,100]);
// [ { bins: 0, count: 1, freq: 0.1 },
//   { bins: 20, count: 2, freq: 0.2 },
//   { bins: 40, count: 3, freq: 0.3 },
//   { bins: 60, count: 3, freq: 0.3 },
//   { bins: 80, count: 1, freq: 0.1 },
//   { bins: 100, count: 0, freq: 0 } ]

ubique.histc(ubique.cat(0,A,B),[0,50,100]);
// [ [ { bins: 0, count: 5, freq: 0.5 },
//     { bins: 50, count: 5, freq: 0.5 },
//     { bins: 100, count: 0, freq: 0 } ],
//   [ { bins: 0, count: 6, freq: 0.6 },
//     { bins: 50, count: 4, freq: 0.4 },
//     { bins: 100, count: 0, freq: 0 } ] ]
```

