// https://regex101.com/r/A53nPA/1
const phoneRegex = /\d{0,1}-*\d{3}-*\d{3}-*\d{4}/gm;

// https://regex101.com/r/6vK9rH/1
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gim;

/**
 * Verify that a string is not empty
 * @param {string} value Value to validate
 * @returns {boolean} false if `value` is empty, true otherwise
 */
function notEmpty(value) {
	if (!value || value === '') {
		return false;
	}
	return true;
}

/**
 *  Verify that `value` is a valid phone number format
 * @param {string} value Value to validate
 * @returns {boolean} true if value is a valid phone number
 */
function validPhone(value) {
	return new RegExp(phoneRegex).test(value);
}

/**
 * Verify that `value` is a valid email address format
 * @param {string} value Value to validate
 * @returns {boolean} true if value is a valid email address
 */
function validEmail(value) {
	return new RegExp(emailRegex).test(value);
}

export { notEmpty, validPhone, validEmail };
