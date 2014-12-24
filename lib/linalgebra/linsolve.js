/**
 * Linear Equations
 */
 module.exports = function($u) {
  /**
  * @method linsolve
  * @summary Solve linear system of equations Ax = b
  * @description Solve linear system of equations Ax = b using LU factorization with 
  * rows pivoting
  * 
  * @param  {matrix} A square matrix
  * @param  {array|matrix} b vector or matrix
  * @return {array|matrix}   
  *
  * @example
  * var l = [[1,1,-1],[1,-2,3],[2,3,1]];
  * var m = [4,-6,7];
  * 
  * ubique.linsolve(l,m); // [1, 2, -1]
  *
  * var a = [[5,6,5],[7,8,-1]];
  * var c = [5,6,3];
  * var g = ubique.cat(0,a,c);
  *
  * ubique.linsolve(g,m); // [-68.5, 59, -1.5]
  *
  * ubique.linsolve(l,ubique.eye(3)); // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
  */
  $u.linsolve = function(A,b) {
    if (arguments.length <= 1) {
      throw new Error('not enough input arguments');
    }
    if ($u.nrows(A) !== $u.nrows(b)) {
    	throw new Error('matrix dimensions must agree');
    }
    if (!$u.issquare(A)) {
      throw new Error('matrix must be square');
    }
    if ($u.isnumber(A) && $u.isnumber(b)) {
      return b/A;
    }
    var lud = $u.lu(A);
    if ($u.issingular(lud.LU)) {
    	throw new Error('matrix is singular');
    }
    var LU = lud.LU,
    m = $u.nrows(LU),
    bn = $u.ncols(b),
    bidx = $u.colon(0,bn - 1);

    if ($u.isarray(b)) {
      x = $u.subset(b,lud.P);
    } else
    if ($u.ismatrix(b)) {
      x = $u.subset(b,lud.P,bidx);
    }
    
    var solve = function(LU,m,x) {
      sum = 0;

		// Solve Ly = b using forward substitution
    for (var i = 1;i < m;i++) {
      sum = x[i];
      for (var j = 0;j < i;j++){
        sum -= LU[i][j] * x[j];
      }
      x[i] = sum;
    }

    // Solve Ux = y using back substitution
    x[m-1] /= LU[m-1][m-1];
    for (var i = m-2;i >= 0;i--) {
      sum = x[i];
      for (var j = i+1;j < m;j++) {
        sum -= LU[i][j] * x[j];
      }
      x[i] = sum / LU[i][i];
    }
    return x;
  }
  if ($u.isarray(b) ) {
    return solve(LU,m,x);
  } else {
    for (var h = 0;h < bn;h++) {
      var tcol = $u.col(x,h);
      if (h === 0) {
        out = solve(LU,m,tcol);
      } else {
        out = $u.cat(1,out,solve(LU,m,tcol));
      }
    }
    return out;
  }
}
}