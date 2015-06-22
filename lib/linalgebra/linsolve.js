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
  * var transp = ubique.transpose;
  *
  * ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],transp([5,6,3]));
  * [ 5.846154, -2.384615, -1.538462 ]
  * 
  * ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],[[4],[-6],[7]]);
  * // [1, 2, -1]
  * 
  * ubique.linsolve([[1,1,-1],[1,-2,3],[2,3,1]],ubique.eye(3));
  * // [[0.846154, 0.307692, -0.0769231], [-0.384615, -0.230769, 0.307692], [-0.538462, 0.0769231, 0.230769]]
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
    var LU = lud.LU;
    var m = $u.nrows(LU);
    var bn = $u.ncols(b);
    var bidx = $u.colon(0,bn - 1);

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
    
    for (var h = 0;h < bn;h++) {
      var tcol = $u.getcol(x,h);
      if (h === 0) {
        out = $u.transpose(solve(LU,m,tcol));
      } else {
        out = $u.cat(1,out,$u.transpose(solve(LU,m,tcol)));
      }
    }
    return out;
  }
}