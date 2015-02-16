## For MATLAB users

__General Notes__

In Ubique `number` is a number with dimension `1x1`, `array` is a column vector `Nx1`, `array of array` is a matrix `MxN`.

Functions applied to matrices are `column-major order` as in MATLAB (but the storage is always the native javascript row-major order).

__Indexing__

MATLAB uses 1-based indexing, first element in array is `array(1)`, the last one is `array(length(array))`.
Ubique uses 0-based indexing, first element in array is `array[0]`, the last one is `array[array.length - 1]`.

__Dimension__

MATLAB uses 1 as dimension for rows and 2 for columns.
Ubique uses 0 as dimension for rows and 1 for columns.

__Cloning__

In MATLAB it's possible to clone a variable `A` with the simple sequence: `A = [5;4;3]` and `B = A`. If we change an element in `B`, `B(1) = NaN`, `A` doesn't change his values
`A = [5;4;3]` and `B = [NaN;4;3]`.
In Ubique (based on native Javascript) this sequence doesn't work and we'll have this finale result: `A = [NaN,4,3]` and `B = [NaN,4,3]`. We must clone the array or matrix with a 
special function `clone` in Ubique. 

__Comparative code__

|MATLAB| ubique.| description|
|----- |--------|------|
|
| a = [5,6,5;7,8,-1] | `var a = [[5,6,5],[7,8,-1]]` | Matrix 2x3
| b = [-1,3,-1;4,5,9] | `var b = [[-1,3,-1],[4,5,9]]` | Matrix 2x3
| c = [5;6;3] | `var c = [[5],[6],[3]]` or `c = [5,6,3]` | Vector/Array 3x1 
| s = 10 | `var s = 10` | Number 1x1
| l = [[1,1,-1];[1,-2,3];[2,3,1]] | `var l = [[1,1,-1],[1,-2,3],[2,3,1]]` | Square matrix 3x3
| f = [[3, 2]; [5, 2]] | `var f = [[3, 2], [5, 2]]` | Square matrix 2x2
|
| a + b | `plus(a,b)` | Addition A + B
| a - b | `minus(a,b)` | Subtraction A - B
| a.* b | `times(a,b)` | Array multiply A. * B (element-by-element multiplication)
| a * b | `mtimes(a,b)` | Matrix multiplication A * B
| a./ b | `rdivide(a,b)` | Right array division A. / B
| a / l | `mrdivide(a,l)` | Matrix division A / B (B must be square)
| a.\ b | `ldivide(a,b)` | Left array division A. \ B
| f \ a | `mldivide(f,a)` | Matrix division A \ B (A must be square)
| a.^ 2 | `power(a,2)` | Element-wise power A. ^ B
| f^2 | `mpower(f,2)` | Matrix power A ^ B
| -a | `uminus(a)` | Unary minus -A
| a(:,1) | `col(a,0)` | Get a column of a matrix
| a(1,:) | `row(a,0)` | Get a row of a matrix
| z = 1:2:9 | `var z = colon(1,9,2)` | Create vector -> `z = [1, 3, 5, 7, 9]`
| c(end) | `subset(c,end(c))` | Last value in array
| a(end,end) | `subset(a,end(a,0),end(a,1))` | Last value in matrix
| a(end,:) | `row(a,end(a,0))` | Last row in matrix
| a(:,end) | `col(a,end(a,1))` | Last column in matrix
| a(2:5) | `subsetlin(a,colon(1,4))` | Subset of matrix based on linear indexing (0..N-1)
| a(1:2,2:3) | `subset(a,colon(0,1),colon(1,2))` | Subset of matrix based on X,Y coordinates
|
| [x1,x2] = ind2sub(size(a),[3,4]) | `ind2sub(size(a),[2,3])` | Multiple subscripts from linear index -> [[0, 1], [1, 1]]
| sub2ind(size(a),[1,2],[2,2]) | `sub2ind(size(a),[[0, 1], [1, 1]])` | Subscripts to linear indices -> [2,3]
| numel(a) | `numel(a)` | Number of array/matrix elements
| size(a) | `size(a)` | Array/Matrix dimensions
| arrayfun(@(x)sign(x),l) | `arrayfun(l,sign)` | Apply function to each element of array or matrix
| det(l) | `det(l)` | Matrix determinant
| inv(f) | `inv(f)` | Matrix inverse
| [L,U,P] = lu(f) | `lu(f)` | LU matrix factorization. Return LU (lu matrix),L (lower triangular matrix), U (upper triangular matrix),P (pivot vector),S (pivot sign) +1 or -1
| linsove(l,eye(3)) | `linsolve(l,eye(3))` | Solve linear system of equations Ax = b using LU factorization with rows pivoting
| cat(1,a,b) | `cat(0,a,b)` |  Concatenate arrays and matrices
| cat(1,a,b,c') | `cat(0,a,b,transpose(c))` | Concatenate multiple inputs
| horzcat(a,b) | `horzcat(a,b)` | Concatenate matrices horizontally
| vertcat(a,b,c') | `vertcat(a,b,transpose(c))` | Concatenate arrays or matrices vertically
| eye(3) | `eye(3)` | Identity matrix
| diag(l,-1) | `diag(l,-1)` | Diagonal matrix and get diagonals of a matrix
| zeros(3,2) | `zeros(3,2)` | Create an array or matrix of all zeros
| ones(3,2) | `ones(3,2)` | Create an array or matrix of all ones
| true(3,2) | `trues(3,2)` | Create an array or matrix of all true
| false(3,2) | `falses(3,2)` | Create an array or matrix of all false
| nan(3,2) | `nan(3,2)` | Create an array or matrix of all NaN
| ones(3) * 5 | `matrix(3,3,5)` | Create a matrix 3x3 with all value 5
| sort(c,'descend') | `sort(c,'descend')` | Sort array elements in ascending/descending order. For matrix it is possibile to sort along a dimension. Based on Merge Sort algorithm
| reshape(l,1,9) | `reshape(l,1,9)` | Reshape array or matrix with custom values
| repmat(c,1,2) | `repmat(c,1,2)` | Replicate and tile array
| linspace(1,10,5) | `linspace(1,10,5)` | Create linearly spaced arrays
| logspace(0.1,1,5) | `logspace(0.1,1,5)` | Create logarithmically spaced arrays
| flipdim(a,2) | `flipdim(a,1)` | Flip order of elements in array or matrix 
|