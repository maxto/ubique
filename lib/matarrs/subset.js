/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {

 /**
  * @method subset
  * @summary Subset of array or matrix based on X,Y coordinates
  * @description Subset of array or matrix based on X,Y coordinates
  * 
  * @param  {array|matrix} m array or matrix of elements
  * @param  {number|array} r indexing for rows
  * @param  {number|array} c indexing for columns
  * @return {number|array|matrix}   
  *
  * * @example
  * var a = [[5,6,5],[7,8,-1]];
  * var c = [5,6,3];
  *
  * ubique.subset(c,1); // 6
  * ubique.subset(c,[1,2]); // [6, 3]
  * ubique.subset(c,ubique.end(c)); 3
  * ubique.subset(a,0,1); // [[6]]
  * ubique.subset(a,[0,1],[1,2]); // [[6, 5], [8, -1]]
  */
  $u.subset = function(m,r,c) {
    if (arguments.length === 0) {
      throw new Error('not enough input arguments');
    }
    if (arguments.length > 3) {
      throw new Error('too many input arguments');
    }
    if (arguments.length === 1) {
      return m;
    } 
    if (arguments.length === 2) {
      if ($u.isnumber(m)) {
        return m;
      }
      if ($u.isarray(m)) {
        if ($u.isnumber(r)) {
          return m[r];
        } else {
          return r.map(function(val) {return m[val];});
        }
      }
    }
    if (arguments.length === 3) {
      if ($u.ismatrix(m)) {
        if ($u.isnumber(r)) {
          r = [r];
        }
        if ($u.isnumber(c)) {
          c = [c];
        }
        if (r.length  === 1 && c.length === 1) {
          out = [[0]];
        } else {
          out = $u.zeros(r.length,c.length);
        }
        for (var i = 0;i < r.length;i++) {
          var tmp = r[i];
          for (var j = 0;j < c.length;j++) {
            out[i][j] = m[tmp][c[j]];
          }
        }
        return $u.squeeze(out);
      } else {
        throw new Error('input must be a matrix');
      }
    }
  }
}

