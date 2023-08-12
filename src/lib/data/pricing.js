const packages = [
	{
		name: 'Day Dream',
		price: 170,
		features: [
			'1 hour',
			'1 location',
			'up to 5 subjects',
			'20-30 edits',
			'access to client wardrobe',
			'3-4 week turnaround',
		],
	},
	{
		name: 'Sweet Dream',
		price: 270,
		features: [
			'1.5 hours',
			'1-2 locations',
			'up to 8 subjects',
			'30-40 edits',
			'access to client wardrobe',
			'2-3 week turnaround',
		],
	},
	{
		name: 'Dream Come True',
		price: 370,
		features: [
			'2 hours',
			'1-2 locations',
			'unlimited subjects',
			'40-50 edits',
			'access to client wardrobe',
			'1-2 week turnaround',
		],
	},
];

const addOns = [
	{
		name: 'Snakes',
		description: 'Shoot with two ball pythons, Drakho and Nina',
		price: '$50',
	},
	{
		name: 'Fast turnaround',
		description: 'Get your pictures a week early with expedited delivery',
		price: '$75',
	},
	{
		name: 'Extra images',
		description: 'Get 10 extra edited images',
		price: '$50',
	},
	{
		name: 'Physical delivery',
		description: 'Get a physical copy of your images on a flash drive',
		price: '$30',
	},
];

export default {
	packages,
	addOns,
};
