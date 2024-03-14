/**
 * @typedef {Object} ImageItem
 * @property {number} id
 * @property {string} path
 */

/**
 * @typedef {Object} SizeItem
 * @property {string} name
 * @property {string} price
 */

/** @type {ImageItem[]} */
const images = [
	{
		id: 1,
		path: '/images/classic/001.jpg',
	},
	{
		id: 2,
		path: '/images/classic/002.jpg',
	},
	{
		id: 3,
		path: '/images/classic/003.jpg',
	},
	{
		id: 4,
		path: '/images/classic/004.jpg',
	},
];

/** @type {SizeItem[]} */
const sizes = [
	{
		name: '5" x 9"',
		price: '$20',
	},
	{
		name: '8.5" x 11"',
		price: '$50',
	},
];

export default {
	images,
	sizes,
};
