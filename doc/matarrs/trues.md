### trues

Create array of all true


#### Syntax

ubique.trues()


#### Description

Create array of all true  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`args` | number/array/... | variable input arguments (max 2)


#### Examples

```js
ubique.trues(0);
// []

ubique.trues(1);
// [ [ true ] ]

ubique.trues(2);
// [ [ true, true ], [ true, true ] ]

ubique.trues([2,1]);
// [ [ true ], [ true ] ]

ubique.trues(2,3);
// [ [ true, true, true ], [ true, true, true ] ]
```

