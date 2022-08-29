/**
 * THE PALINDROME ALGORITHM
 * created by Isaac
 * This method will check if a text or phrase is the same as its reversal
 * @param {string} textOrPhrase The text or phrase to test
 * @returns {boolean}
 */
function palindrome (textOrPhrase) {
	const characters = textOrPhrase.split("");
	let lastIndex = characters.length - 1;
	let isPalindromic = false;

	for (let i = 0; i < characters.length; i++) {
		let character = characters[i];
		let reversedCharacter = characters[lastIndex];

		if (character === reversedCharacter) {
			isPalindromic = true;
			--lastIndex;
			continue;
		}

		isPalindromic = false;
		break;
	}

	return isPalindromic;
}

module.exports = { 
	palindrome: palindrome
};
