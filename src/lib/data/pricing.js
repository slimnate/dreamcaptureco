const packages = [
	// {
	// 	name: 'Mini',
	// 	price: 200,
	// 	features: [
	// 		'30 minutes',
	// 		'1 location',
	// 		'1-2 subjects',
	// 		'10-15 edits',
	// 		'access to client wardrobe',
	// 		'3-4 week turnaround',
	// 	],
	// },
	{
		name: 'Day Dream',
		price: 350,
		features: [
			'45 minutes',
			'1 location',
			'up to 3 subjects',
			'20-30 edits',
			'access to client wardrobe',
			'3-4 week turnaround',
		],
	},
	{
		name: 'Sweet Dream',
		price: 500,
		features: [
			'1.5 hours',
			'1-2 locations',
			'up to 5 subjects',
			'30-40 edits',
			'access to client wardrobe',
			'2-3 week turnaround',
		],
	},
	{
		name: 'Dream Come True',
		price: 650,
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
	// {
	// 	name: 'Physical delivery',
	// 	description: 'Get a physical copy of your images on a flash drive',
	// 	price: '$30',
	// },
	{
		name: 'Studio Upgrade',
		description: 'Upgrade to larger studio with more backdrop options',
		price: '$50/hr',
	},
];

export default {
	packages,
	addOns,
};
