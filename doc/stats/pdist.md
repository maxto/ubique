### pdist

Pairwise distance between two sets of observations


#### Syntax

ubique.pdist(x,y,mode)


#### Description

Compute distance between two array with differente methods:  
euclidean, manhattan, chebycheb, hamming  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array | array of values in X
|`y` | array | array of values in Y
|`mode` | string | methods: 'euclidean','manhattan','chebychev','hamming' (def: 'euclidean')


#### Examples

```js
var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.pdist(x,y,'euclidean');
// 0.170532

ubique.pdist(x,y,'manhattan');
// 0.471

ubique.pdist(x,y,'chebychev');
// 0.087

ubique.pdist(x,y,'hamming');
// 10
```

