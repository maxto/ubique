### mergesort

Sort array in ascending/descending order


#### Syntax

ubique.mergesort(x,mode)


#### Description

Mergesort is a divide and conquer algorithm that was invented by John von Neumann.  
A merge sort works as follows:  
  
1 - Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).  
2 - Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.  
  
Source: [Merge sort](http://en.wikipedia.org/wiki/Merge_sort)  
  
Returns sorted values with sorted indexes as array of array (matrix)  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array | array of elements
|`mode` | string | sorting direction, "ascend" (default) or "descend"


#### Examples

```js
// mergesort with input values and indexes
ubique.mergesort([[9,-3,2,-12,0,1],[0,1,2,3,4,5]]);
// [ [ -12, -3, 0, 1, 2, 9 ], [ 3, 1, 4, 5, 2, 0 ] ]

// with only an array of input values
ubique.mergesort([9,-3,2,-12,0,1]);
// [ [ -12, -3, 0, 1, 2, 9 ], [ 3, 1, 4, 5, 2, 0 ] ]

ubique.mergesort([9,-3,2,-12,0,1],'descend');
// [ [ 9, 2, 1, 0, -3, -12 ], [ 0, 2, 5, 4, 1, 3 ] ]
```

