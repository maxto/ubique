/**
 * Parse Strings
 */
 module.exports = function ($u) {
/**
 * @method format
 * @summary Find one string within another
 * @description Find one string within another. If pattern length > text length returns null.
 * 
 * @param  {string} str data to be searched
 * @param  {string} pattern search pattern
 * @return {array} indices of occurrences of pattern
 *  
 * @example
 * var mystr = 'find indices in the string';
 *
 * ubique.strfind(mystr,'in');
 * // [ 1, 5, 13, 23 ]
 */
 $u.strfind = function (str,pattern) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if ($u.isstring(str) && $u.isstring(pattern) && (str.length >= pattern.length)) {
    var i = str.indexOf(pattern);
    var posidx = [];
    while(i >= 0) {
      posidx.push(i);
      i = str.indexOf(pattern, i + 1);
    }
    return posidx;
  } else {
    throw new Error('unknown arguments');
  }
}
}