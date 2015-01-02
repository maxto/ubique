/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method  prctile
 * @summary Percentiles of a sample
 * @description Percentiles of a sample, inclusive
 * 
 * @param  {array|matrix} x array of emlements
 * @param  {number} p p-th percentile in the range [0,100]
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|array}   
 *
 * @example
 * var x = [ 0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = ubique.cat(1,x,y);
 * 
 * ubique.prctile(x,5); // -0.014
 * ubique.prctile(x,33); // 0.0118
 * ubique.prctile(z,5,0); // [-0.005, 0.026, 0.015, -0.037, -0.061, 0.024, -0.049, -0.021, -0.014, 0.039]
 */
 $u.prctile = function(x,p,dim) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (p < 0 || p > 100) {
    throw new Error('p-th percentile must be a real value between 0 and 100 inclusive');
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var _prctile = function(a,pr) {
   var arrnum= $u.colon(0.5,a.length - 0.5),
   _a = $u.sort(a),
   pq = $u.rdivide($u.times(arrnum,100),a.length);

   pq = $u.cat(0,0,pq,100);
   _a = $u.cat(0,_a[0],_a,_a[_a.length - 1]);
   return $u.interp1(pq,_a,pr);
 }
 if ($u.isnumber(x)) {
  return x;
}
if ($u.isarray(x)) {
  return _prctile(x,p);
}
return $u.vectorfun(x,function(val){return _prctile(val,p);},dim);
}

}