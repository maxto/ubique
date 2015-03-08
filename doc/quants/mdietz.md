### mdietz

Historical performance of an investment portfolio with external cash flows


#### Syntax

ubique.mdietz(ev,bv,cf,cfd,cd)


#### Description

Historical performance of an investment portfolio with external cash flows  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`ev` | number | ending value
|`bv` | number | beginning market value
|`cf` | number/array | external cashflows (inflows/outflows)
|`cfd` | number/array | number of calendar days from the beginning of the period that cash flow occurs
|`cd` | number | total number of calendar days in the measurement period


#### Examples

```js
var ev = 104.4,bv = 74.2,cf = 37.1,cfd = 14, cd = 31;
ubique.mdietz(ev,bv,cf,cfd,cd);
// -0.07298099559862156

var ev = 1200,bv = 1000,cf = [10,50,35,20],cfd = [15,38,46,79],cd = 90;
ubique.mdietz(ev,bv,cf,cfd,cd);
// 0.0804
```

