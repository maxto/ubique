### strfind

Find one string within another


#### Syntax

ubique.strfind (str,pattern)


#### Description

Find one string within another. If pattern length > text length returns null.  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`str` | string | data to be searched
|`pattern` | string | search pattern


#### Examples

```js
var mystr = 'find indices in the string';

ubique.strfind(mystr,'in');
// [ 1, 5, 13, 23 ]
```

