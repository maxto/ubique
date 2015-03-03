### xreturn(x,y)

Excess return


#### Description

Excess return. If X and Y are arrays, returns mean of difference of values X - Y, otherwise returns a simple difference X - Y  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | number!array | number or array of elements in X
|`y` | number/array | number or array of elements in Y


#### Examples

```js
var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];

ubique.xreturn(x,y); // 0.0053
ubique.xreturn(0.05,0.015); // 0.035
```

