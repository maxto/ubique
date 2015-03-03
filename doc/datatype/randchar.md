### randchar(n,strset)

Generate a random alpha-numeric string


#### Description

Generate a random alpha-numeric string  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`n` | number |      number of characters to generate (def: 6)
|`strset` | string | character set to get random sample


#### Examples

```js
ubique.randchar(12,'ABCD!-|/%&$\1234567890'); //  D&80%BB/C%B
ubique.randchar(16,'ABCDEFGHILMNOPQRSTUVZ-1234567890');  //  U68MP-U7ZI26T2HS
```

