### mergesort(x,mode)

Sort array in ascending/descending order


#### Description

Mergesort is a divide and conquer algorithm that was invented by John von Neumann.  
A merge sort works as follows:  
1 - Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).  
2 - Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.  
[Source: http://en.wikipedia.org/wiki/Merge_sort]  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array | array of elements
|`mode` | string | sorting direction, "ascend" (default) or "descend"


#### Examples

```js
var x = [3,1,-1,0,5];

ubique.mergesort([3,1,-1,5],"ascend"); // [-1, 1, 3, 5]
ubique.mergesort(x,"descend"); // [5, 3, 1, 0, -1]
```

