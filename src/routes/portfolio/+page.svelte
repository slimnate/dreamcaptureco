<script>
	import Gallery from '$lib/components/carousel/Gallery.svelte';
	import Spacer from '$lib/components/Spacer.svelte';

	/**
	 * Returns a function that is passed to Array.map to map a
	 * list of image file names into a gallery item format
	 *
	 * @param {string} name
	 */
	function itemMapper(name) {
		return (/** @type {string} */ image) => {
			let lower = name.toLowerCase();
			return { image: `images/${lower}/${image}`, link: `/portfolio/${lower}`, name };
		};
	}

	const portraitItems = ['001.jpg', '002.jpg', '003.jpg'].map(itemMapper('Portrait'));

	const boudoirItems = ['001.jpg', '002.jpg', '003.jpg'].map(itemMapper('Boudoir'));

	const couplesItems = ['001.jpg', '002.jpg', '003.jpg'].map(itemMapper('Couples'));

	const familyItems = ['001.jpg', '002.jpg', '003.jpg'].map(itemMapper('Family'));

	const maternityItems = ['001.jpg', '002.jpg', '003.jpg'].map(itemMapper('Maternity'));

	const newbornItems = ['001.jpg', '002.jpg', '003.jpg'].map(itemMapper('Newborn'));
</script>

<Spacer>Portfolio</Spacer>

<Gallery items={portraitItems} id="portraitsGallery" />

<Spacer />

<Gallery items={boudoirItems} id="boudoirGallery" />

<Spacer />

<Gallery items={couplesItems} id="couplesGallery" />

<Spacer />

<Gallery items={familyItems} id="familyGallery" />

<Spacer />

<Gallery items={maternityItems} id="maternityGallery" />

<Spacer />

<Gallery items={newbornItems} id="newbornGallery" />

<Spacer />
