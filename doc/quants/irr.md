### irr
Internal rate of return on an investment based on a series of periodic cash flows


#### Description

Calculates the internal rate of return on an investment based on a series of regularly/irregurarly periodic cash flows


|Params|Type|Description
|---------|----|-----------
|`cf` | array |    income or payments associated with the investment. Must contain at least one negative and one positive cash flow to calculate rate of return, and the first amount must be negative
|`cfd` | array |   number of calendar days from the beginning of the period that cash flow occurs
|`cd` | number |    total number of calendar days in the measurement period
|`guess` | number | estimate for what the internal rate of return will be (def: 0.1)


#### Examples

```js
//Simple IRR
ubique.irr([250000,25000,-10000,-285000]); //  0.024712563094781776
ubique.irr([74.2,37.1,-104.4],[0,1,2],2); //  -0.07410820570460687

//Modified IRR
ubique.irr([250000,25000,-10000,-285000],[0,45,69,90],90);  //  0.07692283872311274
ubique.irr([74.2,37.1,-104.4],[0,14,31],31);  //  -0.07271456460699813
```

