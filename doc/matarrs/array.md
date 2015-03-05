### array

Create an array with custom elements


#### Syntax

ubique.array(n,val)


#### Description

Create an array with custom elements  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`n` | number | number of elements
|`val` | number/string/boolean | values of the array


#### Examples

```js
ubique.array();
// []
ubique.array(3,-1);
// [-1, -1, -1]
ubique.array(3,'y');
// [ 'y', 'y', 'y' ]
ubique.array(3,true);
// [ true, true, true ]
```

