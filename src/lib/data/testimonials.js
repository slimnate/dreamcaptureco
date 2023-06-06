/**
 * @typedef TestimonialItem
 * @property {string} name
 * @property {string} location
 * @property {string} text
 * @property {{avif: string, webp: string, jpg: string, sizes: string}} image
 * @property {boolean?} fitTop
 */

const sizes = '(max-width: 600px) 200px, 500px';

/* @imagetools-generate name(setahnie) image($lib/images/testimonials/setahnie-01.jpg) w(200;500) */
/* @imagetools-generate name(electra) image($lib/images/testimonials/electra-03.jpg) w(200;500) */
/* @imagetools-generate name(bri) image($lib/images/testimonials/bri-03.jpg) w(200;500) */
/* @imagetools-generate name(quinton) image($lib/images/testimonials/quinton-02.jpg) w(200;500) */
/* @imagetools-generate name(allyson) image($lib/images/testimonials/allyson-01.jpg) w(200;500) */
/* @imagetools-generate name(dani) image($lib/images/testimonials/dani-02.jpg) w(200;500) */

/** @type {TestimonialItem[]} */
const testimonials = [
	{
		name: 'Setahnie',
		location: 'Kansas City, MO',
		text: 'Izzy is very professional and works great with anyone! We were very impressed at how she made my daughters first photoshoot an easy task. We loved our photos and would book again with her in the future!',
		// @ts-ignore
		// eslint-disable-next-line no-undef
		image: { ...setahnie_images, sizes },
		fitTop: true,
	},
	{
		name: 'Electra',
		location: 'Kansas City, MO',
		text: 'Izzy is one of the sweetest photographers I have met! She is so fun and creative to work with! She makes your ideas come to life! I would recommend her to anyone! I have nothing but wonderful things to say!',
		// @ts-ignore
		// eslint-disable-next-line no-undef
		image: { ...electra_images, sizes },
		fitTop: true,
	},
	{
		name: 'Bri',
		location: 'Lees Summit, MO',
		text: 'Not only are Izzy’s photos beautiful, but she is incredible to work with. I’m always amazed at how quickly Izzy gets me comfortable in front of the camera, and how beautiful she makes me feel in her pictures!',
		// @ts-ignore
		// eslint-disable-next-line no-undef
		image: { ...bri_images, sizes },
		fitTop: true,
	},
	{
		name: 'Quinton',
		location: 'Lawrence, KS',
		text: 'Izzy takes her time, she is very professional, and has a unique way of interacting with her clients. She’s a fantastic photographer! I will continue going back to Izzy for all my shoots!',
		// @ts-ignore
		// eslint-disable-next-line no-undef
		image: { ...quinton_images, sizes },
		fitTop: true,
	},
	{
		name: 'Allyson',
		location: 'Bonner Springs, KS',
		text: 'I’ve had the pleasure of working with Izzy twice now and let me say, this definitely won’t be the last!  She’s creative and made both shoots fun!  Not to mention she did great with my kids and my dog and captured the most amazing pictures of our family!',
		// @ts-ignore
		// eslint-disable-next-line no-undef
		image: { ...allyson_images, sizes },
		fitTop: false,
	},
	{
		name: 'Dani',
		location: 'Kansas City, MO',
		text: 'Izzy was amazing! I had a toddler and a puppy for our photoshoot and Izzy made it SO breezy. My son absolutely adored her positivity and how welcoming she was. I adore all of the pictures she got of us off guard, she captures all the best moments & makes them timeless!',
		// @ts-ignore
		// eslint-disable-next-line no-undef
		image: { ...dani_images, sizes },
		fitTop: true,
	},
];

export default testimonials;
