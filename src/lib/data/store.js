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
		name: '5" x 7"',
		price: '$15',
	},
	{
		name: '8" x 10"',
		price: '$25',
	},
	{
		name: '11" x 14"',
		price: '$45',
	},
];

export default {
	images,
	sizes,
};
