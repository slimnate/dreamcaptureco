/**
 * This file will contain all the images and metadata used throughout the portfolio page(s)
 *
 * images:
 *  name = file name, relative to base path
 *  main = display this image as the header on the main page
 *  gallery = display this image on the portfolio page
 *  standout = display this image larger on the category specific portfolio page
 */

/**
 * @typedef {Object} ImageItem
 * @property {string} name
 * @property {boolean} main
 * @property { boolean} gallery
 */

// /** @type {{images: {name:string, main:boolean, gallery:boolean}[]}}  */
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
			{ name: '030.jpg', main: false, gallery: false },
			{ name: '031.jpg', main: true, gallery: false },
			{ name: '032.jpg', main: false, gallery: false },
			{ name: '033.jpg', main: false, gallery: false },
			{ name: '034.jpg', main: false, gallery: false },
		],
	},
	boudoir: {
		images: [
			{ name: '001.jpg', main: true, gallery: true },
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
		],
	},
	couples: {
		images: [
			{ name: '001.jpg', main: false, gallery: true },
			{ name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: true, gallery: false },
			{ name: '005.jpg', main: false, gallery: false },
			{ name: '006.jpg', main: false, gallery: false },
			{ name: '007.jpg', main: false, gallery: false },
			{ name: '008.jpg', main: false, gallery: false },
			{ name: '009.jpg', main: false, gallery: false },
		],
	},
	family: {
		images: [
			{ name: '001.jpg', main: true, gallery: true },
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
			{ name: '001.jpg', main: true, gallery: true },
			{ name: '002.jpg', main: false, gallery: true },
			{ name: '003.jpg', main: false, gallery: true },
			{ name: '004.jpg', main: false, gallery: false },
		],
	},
};

/**
 * Returns a function that is passed to Array.map to map a
 * list of image file names into a gallery item format
 *
 * @param {string} category
 */
function itemMapper(category) {
	return (/** @type {ImageItem} */ image) => { return generateImageItem(category, image.name)};
}

/**
 * Generate a gallery image item from a category and image name
 * @param {string} category
 * @param {string} image
 */
function generateImageItem(category, image) {
	return { image: `images/${category}/${image}`, link: `/portfolio/${category}`, name: category };
}

function getHeaderImages() {
	let result = [];
	for (const [category, item] of Object.entries(images)) {
		let mainItem = item.images.filter((img) => img.main)[0];
		result.push(generateImageItem(category, mainItem.name));
	}

	return result;
}

/**
 * @param {string} category
 */
function getGalleryImagesFor(category) {
  if(!Object.hasOwn(images, category)) {
    return [];
  }
	// @ts-ignore ignore error using string as object key until
  // i can figure out how to tell TS this is okay
	return images[category].images.filter(img => img.gallery).map(itemMapper(category));
}

export {
	getHeaderImages,
	getGalleryImagesFor,
};
