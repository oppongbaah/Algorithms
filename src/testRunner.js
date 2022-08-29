/**
 * 
 * @param {number} totalTest The number of tests to run
 * @param {function} algorithm The algorithm to run
 * @param {Object} data The data to run against
 * @key data.key The text data
 * @value data.value The expected answer
 */
function TestRunner ({ totalTest, algorithm, data }) {
	this._totalTest = totalTest;
	this._algorithm = algorithm;
	this._data = data;

	// run internal methods
	this.run();
	this.calculateScore();
}

TestRunner.prototype = {
	/**
	 * Runs the test
	 * @returns {void}
	 */
	run: function () {
		for (let actual in this._data) {
			const expected = this._data[actual];
			const answer = this._algorithm(actual);

			if (answer === expected) {
				console.log(`Test ${Object.keys(this._data).indexOf(key)} passed`);
				this._score++;
				return;
			}
		}

		console.log(`Test ${Object.keys(this._data).indexOf(key)} failed`);
	},

	/**
	 * Calculates the score of the user
	 */
	calculateScore: function () {
		const scorePercentage = (this._score / this._totalTest) * 100;
		console.log(`\n\n Your total score is ${scorePercentage}%`);
	}
}


module.exports = TestRunner;
