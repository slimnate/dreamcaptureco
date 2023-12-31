/**
 * This file will contain all the images and metadata used throughout the portfolio page(s)
 *
 * images:
 *  name = file name, relative to base path
 *  main = display this image as the header on the main page
 *  gallery = display this image on the portfolio page
 *  standout = display this image larger on the category specific portfolio page
 */

import { error } from '@sveltejs/kit';

/**
 * @typedef {Object} ImageItem
 * @property {string} name
 * @property {boolean} main
 * @property {boolean} gallery
 */

/**
 * @typedef {Object} GalleryItem
 * @property {string} image
 * @property {string} link
 * @property {string} name
 */

/**
 * @typedef {Object} CategoryDeclaration
 * @property {ImageItem[]} images
 * @property {string} [displayName]
 */

/** @type {{[key: string]: CategoryDeclaration, }}  */
const images = {
	portrait: {
		displayName: 'Creative Portrait',
		images: [
			// { name: '001.jpg', main: false, gallery: true },
			// { name: '002.jpg', main: false, gallery: true },
			// { name: '003.jpg', main: false, gallery: true },
			// { name: '004.jpg', main: false, gallery: false },
			// { name: '005.jpg', main: false, gallery: false },
			// { name: '006.jpg', main: false, gallery: false },
			// { name: '007.jpg', main: false, gallery: false },
			// { name: '008.jpg', main: false, gallery: false },
			// { name: '009.jpg', main: false, gallery: false },
			// { name: '010.jpg', main: false, gallery: false },
			// { name: '011.jpg', main: false, gallery: false },
			// { name: '012.jpg', main: false, gallery: false },
			// { name: '013.jpg', main: false, gallery: false },
			// { name: '014.jpg', main: false, gallery: false },
			// { name: '015.jpg', main: false, gallery: false },
			// { name: '016.jpg', main: false, gallery: false },
			// { name: '017.jpg', main: false, gallery: false }, //move to business
			{ name: '018.jpg', main: false, gallery: false },
			// { name: '019.jpg', main: false, gallery: false },
			// { name: '020.jpg', main: false, gallery: false },
			// { name: '021.jpg', main: false, gallery: false },
			// { name: '022.jpg', main: false, gallery: false },
			// { name: '023.jpg', main: false, gallery: false },
			{ name: '024.jpg', main: false, gallery: false },
			// { name: '025.jpg', main: false, gallery: false },
			// { name: '026.jpg', main: false, gallery: false },
			// { name: '027.jpg', main: false, gallery: false },
			// { name: '028.jpg', main: false, gallery: false },
			// { name: '029.jpg', main: false, gallery: false },
			// { name: '030.jpg', main: false, gallery: false },
			// { name: '031.jpg', main: false, gallery: false },
			// { name: '032.jpg', main: false, gallery: false },
			// { name: '033.jpg', main: false, gallery: false },
			// { name: '034.jpg', main: false, gallery: false },
			// { name: '035.jpg', main: false, gallery: false },
			// { name: '036.jpg', main: false, gallery: false },
			// { name: '037.jpg', main: false, gallery: false },
			{ name: '066.jpg', main: false, gallery: true }, //out of order
			// { name: '038.jpg', main: false, gallery: true },
			// { name: '039.jpg', main: false, gallery: false },
			{ name: '040.jpg', main: false, gallery: false },
			// { name: '041.jpg', main: false, gallery: false },
			// { name: '042.jpg', main: false, gallery: false },
			// { name: '043.jpg', main: false, gallery: false },
			// { name: '044.jpg', main: false, gallery: false },
			// { name: '045.jpg', main: false, gallery: false },
			// { name: '046.jpg', main: false, gallery: false },
			// { name: '047.jpg', main: false, gallery: false },
			{ name: '048.jpg', main: false, gallery: false },
			// { name: '049.jpg', main: false, gallery: false },
			// { name: '050.jpg', main: false, gallery: false },
			{ name: '051.jpg', main: false, gallery: false },
			// { name: '052.jpg', main: false, gallery: false },
			// { name: '053.jpg', main: false, gallery: false },
			// { name: '054.jpg', main: false, gallery: false },
			// { name: '055.jpg', main: false, gallery: false },
			{ name: '056.jpg', main: false, gallery: false },
			// { name: '057.jpg', main: false, gallery: false },
			// { name: '058.jpg', main: false, gallery: false },
			// { name: '059.jpg', main: false, gallery: false },
			// { name: '060.jpg', main: false, gallery: false },
			// { name: '061.jpg', main: false, gallery: false },
			{ name: '062.jpg', main: false, gallery: false },
			// { name: '063.jpg', main: false, gallery: false },
			// { name: '064.jpg', main: true, gallery: false },
			// { name: '065.jpg', main: false, gallery: false },
			// { name: '067.jpg', main: false, gallery: false },
			{ name: '068.jpg', main: false, gallery: false },
			// { name: '069.jpg', main: false, gallery: false },
			// { name: '070.jpg', main: false, gallery: false },
			// { name: '071.jpg', main: false, gallery: false },
			// { name: '072.jpg', main: false, gallery: false },
			// { name: '073.jpg', main: false, gallery: false },
			{ name: '074.jpg', main: false, gallery: false },
			// { name: '075.jpg', main: false, gallery: false },
			{ name: '076.jpg', main: false, gallery: false },
			// { name: '077.jpg', main: false, gallery: false },
			// { name: `078.jpg`, main: false, gallery: false },
			// { name: '079.jpg', main: false, gallery: false },
			// { name: '080.jpg', main: false, gallery: false },
			{ name: '081.jpg', main: true, gallery: true },
			{ name: '082.jpg', main: false, gallery: false },
			{ name: '083.jpg', main: false, gallery: false },
			{ name: '084.jpg', main: false, gallery: false },
			{ name: '085.jpg', main: false, gallery: false },
			{ name: '086.jpg', main: false, gallery: false },
			{ name: '087.jpg', main: false, gallery: false },
			{ name: '088.jpg', main: false, gallery: false },
			{ name: '089.jpg', main: false, gallery: false },
			{ name: '090.jpg', main: false, gallery: false },
			{ name: '091.jpg', main: false, gallery: false },
			{ name: '092.jpg', main: false, gallery: false },
			{ name: '093.jpg', main: false, gallery: false },
			{ name: '094.jpg', main: false, gallery: false },
			{ name: '095.jpg', main: false, gallery: false },
			{ name: '096.jpg', main: false, gallery: false },
			{ name: '097.jpg', main: false, gallery: false },
			{ name: '098.jpg', main: false, gallery: false },
			// { name: '099.jpg', main: false, gallery: false },
			{ name: '100.jpg', main: false, gallery: false },
			{ name: '101.jpg', main: false, gallery: false },
			{ name: '102.jpg', main: false, gallery: false },
			{ name: '103.jpg', main: false, gallery: false },
			{ name: '104.jpg', main: false, gallery: false },
			{ name: '105.jpg', main: false, gallery: false },
			{ name: '106.jpg', main: false, gallery: false },
			{ name: '107.jpg', main: false, gallery: false },
			{ name: '108.jpg', main: false, gallery: false },
			{ name: '109.jpg', main: false, gallery: false },
			{ name: '110.jpg', main: false, gallery: false },
			{ name: '111.jpg', main: false, gallery: false },
			{ name: '112.jpg', main: false, gallery: false },
			{ name: '113.jpg', main: false, gallery: false },
			{ name: '114.jpg', main: false, gallery: false },
			{ name: '115.jpg', main: false, gallery: false },
			{ name: '116.jpg', main: false, gallery: false },
			{ name: '117.jpg', main: false, gallery: false },
			{ name: '118.jpg', main: false, gallery: false },
			{ name: '119.jpg', main: false, gallery: false },
			// { name: '120.jpg', main: false, gallery: false },
			{ name: '121.jpg', main: false, gallery: false },
			{ name: '122.jpg', main: false, gallery: false },
			{ name: '123.jpg', main: false, gallery: false },
			{ name: '124.jpg', main: false, gallery: false },
			{ name: '125.jpg', main: false, gallery: false },
		],
	},
	classic: {
		displayName: 'Classic Portrait',
		images: [
			{ name: '001.jpg', main: true, gallery: true },
			{ name: '002.jpg', main: false, gallery: false },
			{ name: '003.jpg', main: false, gallery: false },
			{ name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			{ name: '010.jpg', main: false, gallery: false },
			{ name: '011.jpg', main: false, gallery: false },
			{ name: '012.jpg', main: false, gallery: false },
			{ name: '013.jpg', main: false, gallery: false },
			// { name: '014.jpg', main: false, gallery: false },
			{ name: '015.jpg', main: false, gallery: false },
			{ name: '016.jpg', main: false, gallery: false },
			{ name: '017.jpg', main: false, gallery: false },
			{ name: '018.jpg', main: false, gallery: false },
			// { name: '019.jpg', main: false, gallery: false },
			// { name: '020.jpg', main: false, gallery: false },
			// { name: '021.jpg', main: false, gallery: false },
			// { name: '022.jpg', main: false, gallery: false },
			// { name: '023.jpg', main: false, gallery: false },
			// { name: '024.jpg', main: false, gallery: false },
			// { name: '025.jpg', main: false, gallery: false },
			// { name: '026.jpg', main: false, gallery: false },
			// { name: '027.jpg', main: false, gallery: false },
			{ name: '028.jpg', main: false, gallery: false },
			// { name: '029.jpg', main: false, gallery: false },
			// { name: '030.jpg', main: false, gallery: false },
			// { name: '031.jpg', main: false, gallery: false },
			// { name: '032.jpg', main: false, gallery: false },
			{ name: '033.jpg', main: false, gallery: false },
			// { name: '034.jpg', main: false, gallery: false },
			{ name: '035.jpg', main: false, gallery: false },
			// { name: '036.jpg', main: false, gallery: false },
			// { name: '037.jpg', main: false, gallery: false },
			{ name: '038.jpg', main: false, gallery: false },
			// { name: '039.jpg', main: false, gallery: false },
			// { name: '040.jpg', main: false, gallery: false },
			{ name: '041.jpg', main: false, gallery: false },
			// { name: '042.jpg', main: false, gallery: false },
			// { name: '043.jpg', main: false, gallery: false },
			// { name: '044.jpg', main: false, gallery: false },
			{ name: '045.jpg', main: false, gallery: false },
			// { name: '046.jpg', main: false, gallery: false },
			// { name: '047.jpg', main: false, gallery: false },
			// { name: '048.jpg', main: false, gallery: false },
			// { name: '049.jpg', main: false, gallery: false },
			// { name: '050.jpg', main: false, gallery: false },
			// { name: '051.jpg', main: false, gallery: false },
			// { name: '052.jpg', main: false, gallery: false },
			// { name: '056.jpg', main: false, gallery: false },
			// { name: '057.jpg', main: false, gallery: false },
			// { name: '058.jpg', main: false, gallery: false },
			{ name: '059.jpg', main: false, gallery: false },
			{ name: '060.jpg', main: false, gallery: false },
			{ name: '061.jpg', main: false, gallery: false },
			// { name: '062.jpg', main: false, gallery: false },
			// { name: '063.jpg', main: false, gallery: false },
			{ name: '064.jpg', main: false, gallery: false },
			// { name: '065.jpg', main: false, gallery: false },
			// { name: '066.jpg', main: false, gallery: false },
			// { name: '067.jpg', main: false, gallery: false },
			// { name: '068.jpg', main: false, gallery: false },
			{ name: '069.jpg', main: false, gallery: false },
			// { name: '070.jpg', main: false, gallery: false },
			// { name: '071.jpg', main: false, gallery: false },
			// { name: '072.jpg', main: false, gallery: false },
			// { name: '073.jpg', main: false, gallery: false },
			// { name: '074.jpg', main: false, gallery: false },
			// { name: '075.jpg', main: false, gallery: false },
			// { name: '076.jpg', main: false, gallery: false },
			// { name: '077.jpg', main: false, gallery: false },
			// { name: '078.jpg', main: false, gallery: false },
			{ name: '079.jpg', main: false, gallery: false },
			{ name: '120.jpg', main: false, gallery: false },
		],
	},
	boudoir: {
		images: [
			// { name: '001.jpg', main: false, gallery: true },
			// { name: '002.jpg', main: false, gallery: true },
			// { name: '003.jpg', main: false, gallery: false },
			{ name: '004.jpg', main: false, gallery: false },
			// { name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			// { name: '007.jpg', main: false, gallery: false },
			// { name: '008.jpg', main: false, gallery: false },
			// { name: '009.jpg', main: false, gallery: false },
			// { name: '010.jpg', main: false, gallery: false },
			// { name: '011.jpg', main: false, gallery: false },
			{ name: '012.jpg', main: false, gallery: false },
			// { name: '013.jpg', main: false, gallery: false },
			// { name: '014.jpg', main: false, gallery: false },
			{ name: '015.jpg', main: false, gallery: false },
			// { name: '016.jpg', main: false, gallery: false },
			{ name: '017.jpg', main: false, gallery: false },
			{ name: '018.jpg', main: false, gallery: true },
			{ name: '019.jpg', main: false, gallery: false },
			{ name: '020.jpg', main: false, gallery: false },
			{ name: '021.jpg', main: false, gallery: false },
			// { name: '022.jpg', main: false, gallery: false },
			{ name: '023.jpg', main: false, gallery: false },
			{ name: '024.jpg', main: false, gallery: false },
			// { name: '025.jpg', main: false, gallery: false },
			{ name: '026.jpg', main: false, gallery: false },
			// { name: '027.jpg', main: false, gallery: false },
			// { name: '028.jpg', main: false, gallery: false },
			{ name: '029.jpg', main: false, gallery: false },
			// { name: '030.jpg', main: false, gallery: false },
			{ name: '031.jpg', main: true, gallery: true },
			// { name: '032.jpg', main: false, gallery: false },
			// { name: '033.jpg', main: false, gallery: false },
			{ name: '034.jpg', main: false, gallery: false },
			// { name: '035.jpg', main: false, gallery: false },
			{ name: '036.jpg', main: false, gallery: false },
			{ name: '037.jpg', main: false, gallery: false },
			{ name: '038.jpg', main: false, gallery: false },
			{ name: '039.jpg', main: false, gallery: false },
			{ name: '040.jpg', main: false, gallery: false },
			// { name: '041.jpg', main: false, gallery: false },
			{ name: '042.jpg', main: false, gallery: false },
			{ name: '058.jpg', main: false, gallery: false },
			// { name: '032.jpg', main: false, gallery: false },
			// { name: '033.jpg', main: false, gallery: false },
			// { name: '022.jpg', main: false, gallery: false },
			// { name: '011.jpg', main: false, gallery: false },
		],
	},
	couples: {
		displayName: 'Couples/Wedding',
		images: [
			// { name: '001.jpg', main: false, gallery: true },
			// { name: '002.jpg', main: false, gallery: true },
			// { name: '003.jpg', main: false, gallery: true },
			// { name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			// { name: '007.jpg', main: false, gallery: false },
			// { name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			// { name: '010.jpg', main: true, gallery: false },
			{ name: '011.jpg', main: false, gallery: false },
			// { name: '012.jpg', main: false, gallery: true },
			// { name: '013.jpg', main: true, gallery: false },
			// { name: '014.jpg', main: false, gallery: false },
			{ name: '015.jpg', main: true, gallery: true },
			// { name: '016.jpg', main: false, gallery: false },
			// { name: '017.jpg', main: false, gallery: false },
			{ name: '018.jpg', main: false, gallery: false },
			{ name: '019.jpg', main: false, gallery: false },
			{ name: '020.jpg', main: false, gallery: false },
			{ name: '021.jpg', main: false, gallery: false },
			// { name: '022.jpg', main: false, gallery: false },
			{ name: '023.jpg', main: false, gallery: false },
			{ name: '024.jpg', main: false, gallery: true },
			{ name: '025.jpg', main: false, gallery: false },
			{ name: '026.jpg', main: false, gallery: false },
			{ name: '027.jpg', main: false, gallery: true },
			{ name: '028.jpg', main: false, gallery: false },
			{ name: '029.jpg', main: false, gallery: false },
			{ name: '030.jpg', main: false, gallery: false },
		],
	},
	family: {
		images: [
			{ name: '001.jpg', main: false, gallery: false },
			// { name: '002.jpg', main: false, gallery: false },
			// { name: '003.jpg', main: false, gallery: false },
			// { name: '004.jpg', main: false, gallery: false },
			// { name: '005.jpg', main: false, gallery: false },
			// { name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			// { name: '009.jpg', main: false, gallery: false },
			{ name: '010.jpg', main: false, gallery: false },
			// { name: '011.jpg', main: false, gallery: false },
			{ name: '012.jpg', main: false, gallery: false },
			{ name: '013.jpg', main: true, gallery: true },
			// { name: '014.jpg', main: false, gallery: false },
			// { name: '015.jpg', main: false, gallery: false },
			{ name: '016.jpg', main: false, gallery: false },
			// { name: '017.jpg', main: false, gallery: false },
			// { name: '018.jpg', main: false, gallery: false },
			{ name: '019.jpg', main: false, gallery: false },
			{ name: '020.jpg', main: false, gallery: false },
			// { name: '021.jpg', main: false, gallery: false },
			{ name: '022.jpg', main: false, gallery: true },
			{ name: '023.jpg', main: false, gallery: false },
			// { name: '024.jpg', main: false, gallery: true },
			{ name: '025.jpg', main: false, gallery: false },
			{ name: '026.jpg', main: false, gallery: false },
			{ name: '027.jpg', main: false, gallery: false },
			{ name: '028.jpg', main: false, gallery: false },
			{ name: '029.jpg', main: false, gallery: false },
			{ name: '030.jpg', main: false, gallery: false },
			{ name: '031.jpg', main: false, gallery: false },
			{ name: '032.jpg', main: false, gallery: false },
			{ name: '033.jpg', main: false, gallery: false },
			{ name: '034.jpg', main: false, gallery: false },
			{ name: '035.jpg', main: false, gallery: false },
		],
	},
	maternity: {
		displayName: 'Maternity/Newborn',
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: false, gallery: false },
			// { name: '003.jpg', main: false, gallery: true },
			// { name: '004.jpg', main: false, gallery: false },
			// { name: '005.jpg', main: false, gallery: false },
			// { name: '006.jpg', main: false, gallery: false },
			// { name: '007.jpg', main: false, gallery: false },
			// { name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			// { name: '010.jpg', main: false, gallery: false },
			// { name: '011.jpg', main: false, gallery: false },
			{ name: '012.jpg', main: false, gallery: false },
			// { name: '013.jpg', main: false, gallery: false },
			// { name: '014.jpg', main: false, gallery: false },
			{ name: '026.jpg', main: true, gallery: false },
			{ name: '027.jpg', main: false, gallery: true },
			// { name: '028.jpg', main: false, gallery: false },
			// { name: '029.jpg', main: false, gallery: false },
			{ name: '030.jpg', main: false, gallery: false },
			{ name: '031.jpg', main: false, gallery: true },
			{ name: '032.jpg', main: false, gallery: false },
			{ name: '033.jpg', main: false, gallery: false },
			// { name: '034.jpg', main: false, gallery: false },
			{ name: '035.jpg', main: false, gallery: false },
			{ name: '036.jpg', main: false, gallery: false },
			{ name: '037.jpg', main: false, gallery: false },
			{ name: '038.jpg', main: false, gallery: false },
			{ name: '039.jpg', main: false, gallery: false },
			{ name: '040.jpg', main: false, gallery: false },
			{ name: '041.jpg', main: false, gallery: false },
			// { name: '013.jpg', main: false, gallery: false },
			// { name: '014.jpg', main: false, gallery: false },
			// { name: '015.jpg', main: false, gallery: false },
			// { name: '016.jpg', main: false, gallery: false },
			// { name: '017.jpg', main: false, gallery: false },
			// { name: '018.jpg', main: false, gallery: false },
			// { name: '019.jpg', main: false, gallery: false },
			// { name: '020.jpg', main: false, gallery: false },
			// { name: '021.jpg', main: false, gallery: false },
			// { name: '022.jpg', main: false, gallery: false },
			// { name: '023.jpg', main: false, gallery: false },
			// { name: '024.jpg', main: false, gallery: false },
			// { name: '025.jpg', main: false, gallery: false },
		],
	},
};

/**
 * @param {string} category
 */
function isValidCategory(category) {
	return Object.hasOwn(images, category);
}

/**
 * Returns a function that is passed to Array.map to map a
 * list of image file names into a gallery item format
 *
 * @param {string} category
 */
function itemMapper(category) {
	return async (/** @type {ImageItem} */ image) => await generateGalleryItem(category, image.name);
}

/**
 * @param {string} category
 */
function urlMapper(category) {
	return (/** @type {ImageItem} */ image) => `/images/${category}/${image.name}`;
}

/**
 * Generate a gallery image item from a category and image name
 * @param {string} category
 * @param {string} image
 * @returns {Promise<GalleryItem>}
 */
async function generateGalleryItem(category, image) {
	const imgPath = `/images/${category}/${image}`;

	return {
		image: imgPath,
		link: `/portfolio/${category}`,
		name: getDisplayName(category),
	};
}

/**
 * Get all the gallery items for the main page
 */
async function getHeaderImages() {
	/** @type {GalleryItem[]} */
	let result = [];
	for (const [category, item] of Object.entries(images)) {
		let mainItem = item.images.filter((img) => img.main)[0];
		const galleryItem = await generateGalleryItem(category, mainItem.name);
		result.push(galleryItem);
	}

	return result;
}

/**
 * Get all the gallery items for a specific category
 * @param {string} category
 */
async function getGalleryImagesFor(category) {
	if (!isValidCategory(category)) throw error(404, 'Not a valid category');

	const galleryImages = images[category].images.filter((img) => img.gallery);

	return Promise.all(galleryImages.map(itemMapper(category)));
}

/**
 * Get all the image urls for a specific category
 * @param {string} category
 */
function getAllImagesFor(category) {
	if (!isValidCategory(category)) throw error(404, 'Not a valid category');

	return images[category].images.map(urlMapper(category));
}

/**
 *
 * @param {string} category
 * @returns {string}
 */
function getDisplayName(category) {
	return images[category].displayName || category;
}

export { getHeaderImages, getGalleryImagesFor, getAllImagesFor, isValidCategory, getDisplayName };
