module.exports = function ($t) {
	/**
	 * @method arrayDim2ToFixed6
	 * @summary helpful methods for arrays being used in tests
	 * @description helpful methods for arrays being used in tests
	 * @param  {array} x    Array to have elements forced to have precision of 6
	 */
	$t.arrayDim2ToFixed6 = function (arr) {
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr[i].length; j++) {
				arr[i][j] = parseFloat(arr[i][j].toFixed(6));
			}
		}
		return arr;
	}
}

