/**
 * Create and Concatenate Strings
 */
 module.exports = function($u) {
/**
 * @method randchar
 * @summary Generate a random alpha-numeric string
 * @description Generate a random alpha-numeric string
 * 
 * @param  {number} n      number of characters to generate (def: 6)
 * @param  {string} strset character set to get random sample
 * @return {string}        
 *
 * @example
 * ubique.randchar(12,'ABCD!-|/%&$\1234567890'); //  D&80%BB/C%B
 * ubique.randchar(16,'ABCDEFGHILMNOPQRSTUVZ-1234567890');  //  U68MP-U7ZI26T2HS
 */
 $u.randchar = function(n,strset) {
  if ($u.isundefines(n)) {
    n = 6;
  }
  if ($u.isundefined(strset)) {
    strset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
  return Array.apply(0, Array(n)).map(function() {
    return (function(charset) {
      return charset.charAt(Math.floor(Math.random() * charset.length))
    }(strset));
  }).join('')
}

}