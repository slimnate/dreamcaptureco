/**
 * @typedef TestimonialItem
 * @property {string} name
 * @property {string} location
 * @property {string} text
 * @property {string} image
 * @property {boolean?} fitTop
 */

/** @type {TestimonialItem[]} */
const testimonials = [
	{
		name: 'Setahnie',
		location: 'Kansas City, MO',
		text: 'Izzy is very professional and works great with anyone! We were very impressed at how she made my daughters first photoshoot an easy task. We loved our photos and would book again with her in the future!',
		image: '/images/testimonials/setahnie-01.jpg',
		fitTop: true,
	},
	{
		name: 'Electra',
		location: 'Kansas City, MO',
		text: 'Izzy is one of the sweetest photographers I have met! She is so fun and creative to work with! She makes your ideas come to life! I would recommend her to anyone! I have nothing but wonderful things to say!',
		image: '/images/testimonials/electra-02.jpg',
    fitTop: false,
	},
	{
		name: 'Bri',
		location: 'Lees Summit, MO',
		text: 'Not only are Izzy’s photos beautiful, but she is incredible to work with. I’m always amazed at how quickly Izzy gets me comfortable in front of the camera, and how beautiful she makes me feel in her pictures!',
		image: '/images/testimonials/bri-02.jpg',
		fitTop: true,
	},
	{
		name: 'Quinton',
		location: 'Lawrence, KS',
		text: 'Izzy takes her time, she is very professional, and has a unique way of interacting with her clients. She’s a fantastic photographer! I will continue going back to Izzy for all my shoots!',
		image: '/images/testimonials/quinton-01.jpg',
    fitTop: false,
	},
	{
		name: 'Allyson',
		location: 'Bonner Springs, KS',
		text: 'I’ve had the pleasure of working with Izzy twice now and let me say, this definitely won’t be the last!  She’s creative and made both shoots fun!  Not to mention she did great with my kids and my dog and captured the most amazing pictures of our family!',
		image: '/images/testimonials/allyson-01.jpg',
    fitTop: false,
	},
	{
		name: 'Dani',
		location: 'Kansas City, MO',
		text: 'Izzy was amazing! I had a toddler and a puppy for our photoshoot and Izzy made it SO breezy. My son absolutely adored her positivity and how welcoming she was. I adore all of the pictures she got of us off guard, she captures all the best moments & makes them timeless!',
		image: '/images/testimonials/dani-02.jpg',
		fitTop: true,
	},
];

export default testimonials;
