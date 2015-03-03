### annreturn(r,t,n)

Annualisation of return (1 + X) ^ (t / n)


#### Description

Annualisation of return (1 + X) ^ (t / n)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`r` | number | rate of return
|`t` | number | frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
|`n` | number | period of interest


#### Examples

```js
ubique.annreturn([0.015,0.02],12,20); // [0.00897319, 0.0119524]
```

