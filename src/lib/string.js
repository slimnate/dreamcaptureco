/**
 * Capitalize the first letter of a string
 * @param {string} s string to capitalize
 * @returns {string}
 */
function capitalize(s) {
	return s[0].toUpperCase() + s.slice(1);
}

export { capitalize };
