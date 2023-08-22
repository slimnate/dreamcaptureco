/**
 * Custom action that detects a mouse click anywhere outside the element to
 * which it was applied, and fires a 'click_outside' event.
 * @param {HTMLElement} node
 */
function clickOutside(node) {
	/**
	 * Event handle for click events on the DOM. Detects if a click was within
	 * the parent node, and fires an event if not.
	 * @param {Event & MouseEvent & {target: Node }} event */
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(
				new CustomEvent('click_outside', /** @type {CustomEventInit<HTMLElement>} */ (node))
			);
		}
	};

	document.addEventListener(
		'click',
		/** @type {EventListenerOrEventListenerObject}*/ (handleClick)
	);

	return {
		destroy() {
			document.removeEventListener(
				'click',
				/** @type {EventListenerOrEventListenerObject}*/ (handleClick),
				true
			);
		},
	};
}

export { clickOutside };
