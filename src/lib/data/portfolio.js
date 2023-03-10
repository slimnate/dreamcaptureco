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
import { getOrientation } from '$lib/image';

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
 * @property {string} orientation
 */

/** @type {{[key: string]: {images: ImageItem[]}, }}  */
const images = {
	portrait: {
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
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
			{ name: '014.jpg', main: false, gallery: false },
			{ name: '015.jpg', main: false, gallery: false },
			{ name: '016.jpg', main: false, gallery: false },
			{ name: '017.jpg', main: false, gallery: false },
			{ name: '018.jpg', main: false, gallery: false },
			{ name: '019.jpg', main: false, gallery: false },
			{ name: '020.jpg', main: false, gallery: false },
			{ name: '021.jpg', main: false, gallery: false },
			{ name: '022.jpg', main: false, gallery: false },
			{ name: '023.jpg', main: false, gallery: false },
			{ name: '024.jpg', main: false, gallery: false },
			{ name: '025.jpg', main: false, gallery: false },
			{ name: '026.jpg', main: false, gallery: false },
			{ name: '027.jpg', main: false, gallery: false },
			{ name: '028.jpg', main: false, gallery: false },
			{ name: '029.jpg', main: false, gallery: false },
			{ name: '030.jpg', main: true, gallery: false },
			{ name: '031.jpg', main: false, gallery: false },
			{ name: '032.jpg', main: false, gallery: false },
			{ name: '033.jpg', main: false, gallery: false },
			{ name: '034.jpg', main: false, gallery: false },
		],
	},
	boudoir: {
		images: [
			{ name: '001.jpg', main: true, gallery: true },
			// { name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			{ name: '010.jpg', main: false, gallery: false },
			{ name: '011.jpg', main: false, gallery: false },
		],
	},
	couples: {
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: true },
			{ name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: true, gallery: false },
		],
	},
	family: {
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			{ name: '010.jpg', main: false, gallery: false },
			{ name: '011.jpg', main: false, gallery: false },
			{ name: '012.jpg', main: false, gallery: false },
			{ name: '013.jpg', main: true, gallery: false },
			{ name: '014.jpg', main: false, gallery: false },
			{ name: '015.jpg', main: false, gallery: false },
			{ name: '016.jpg', main: false, gallery: false },
		],
	},
	maternity: {
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: true, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			{ name: '010.jpg', main: false, gallery: false },
		],
	},
	newborn: {
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: false, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: true, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
			{ name: '010.jpg', main: false, gallery: false },
			{ name: '011.jpg', main: false, gallery: false },
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
	const orientation = await getOrientation(imgPath);

	return { image: imgPath, link: `/portfolio/${category}`, name: category, orientation };
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

export { getHeaderImages, getGalleryImagesFor, getAllImagesFor, isValidCategory };
