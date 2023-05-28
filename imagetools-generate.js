/**
 * @typedef {Object} ImageToolsParams
 * @property {string} w string provided to the imagetools `w` query param
 * @property {string} formats string value provided to the `formats` query param
 * @property {string} as string value provided to the
 */

/**
 * @typedef {Object} Config
 * @property {ImageToolsParams} defaultParams default params that will be applied when none are passed via an import comment
 * @property {boolean} wrapInObject Whether or not to wrap the resulting imports into a single object
 */

/**
 * @typedef {Object} ImageImport
 * @property {string} name
 * @property {string} image
 * @property {ImageToolsParams} imagetoolsParams
 */

const filesToImportRegex = /\.js|\.svelte/;
const importCommentRegex = /\/\*.*@imagetools-generate.*?\*\//g;
// const paramsRegex =
// 	/.*name\((?<name>.*?)\).*image\((?<image>.*?)\).*(w\((?<w>.*?)\))*.*(?:formats\((?<formats>.*?)\))*.*/;
const nameCaptureRegex = /name\((?<name>.*?)\)/;
const imageCaptureRegex = /image\((?<image>.*?)\)/;
const wCaptureRegex = /w\((?<w>.*?)\)/;
const formatsCaptureRegex = /formats\((?<formats>.*?)\)/;
const asCaptureRegex = /as\((?<as>.*?)\)/;

/**
 * Default config for the plugin
 * @type {Config}
 */
const defaultConfig = {
	defaultParams: {
		w: '1200',
		formats: 'webp,jpg',
		as: null,
	},
	wrapInObject: false,
};

/**
 * Merges the provided config object with the `defaultConfig` object
 *
 * @param {Config} config user config to merge with default
 * @returns {Config} result of merge between userConfig and defaultConfig
 */
function mergeConfig(config) {
	if (!config) {
		return defaultConfig;
	}

	if (!config.wrapInObject) {
		config.wrapInObject = defaultConfig.wrapInObject;
	}

	if (!config.params) {
		config.params = defaultConfig.params;
	}

	for (const param in defaultConfig.defaultParams) {
		if (!config.defaultParams[param]) {
			console.log(1);
			config.defaultParams[param] = defaultConfig.defaultParams[param];
		}
	}

	return config;
}

/**
 * Parse the import information from a comment string
 * @param {string} line string to parse params from
 * @param {Config} config plugin config
 * @returns {ImageImport} Parsed import info
 */
function parseImport(line, config) {
	const regexResults = {
		name: nameCaptureRegex.exec(line),
		image: imageCaptureRegex.exec(line),
		w: wCaptureRegex.exec(line),
		formats: formatsCaptureRegex.exec(line),
		as: asCaptureRegex.exec(line),
	};
	let imageImport = {
		name: '',
		image: '',
		imagetoolsParams: config.defaultParams,
	};
	let errs = [];

	if (!regexResults.name || !regexResults.name.groups.name) errs.push('name');
	if (!regexResults.image || !regexResults.image.groups.image) errs.push('image');
	if (errs.length > 0) {
		throw new Error('Missing required params: ' + errs.join(', '));
	}

	imageImport.name = regexResults.name.groups.name;
	imageImport.image = regexResults.image.groups.image;

	if (regexResults.w) {
		console.log(2);
		console.log(imageImport);
		imageImport.imagetoolsParams.w = regexResults.w.groups.w;
	}

	if (regexResults.formats) {
		imageImport.imagetoolsParams.formats = regexResults.formats.groups.formats;
	}

	if (regexResults.as) {
		imageImport.imagetoolsParams.formats = regexResults.formats;
	}

	return imageImport;
}

/**
 * Generate import statement code for the supplied comment string `line`
 * @param {string} line comment string to generate imports for
 * @param {Config} config plugin configuration
 * @returns {string} the code generated based on the supplied `line`
 */
function generateImportsFromCommentString(line, config) {
	const { name, image, imagetoolsParams } = parseImport(line, config);
	const { w, formats, as } = imagetoolsParams;

	const bundleStart = `const ${name}_images = {\n`;
	const bundleEnd = '};';
	let bundleContents = '';
	let results = '';

	formats.split(',').forEach((format) => {
		let currentLine = `import ${name}_${format} from '${image}`;

		currentLine += `?w=${w}`;

		currentLine += `&format=${format}`;

		if (as) {
			currentLine += `&as=${as}`;
		}

		currentLine += `';\n`;

		results += currentLine;

		bundleContents += `    ${format}: ${name}_${format},\n`;
	});

	if (config.wrapInObject) {
		results += `\n${bundleStart}${bundleContents}${bundleEnd}\n`;
	}

	return results;
}

/**
 * Generates imports for vite-image-tools automatically
 *
 * @param {Partial<Config> | undefined} userConfig user supplied config
 * @returns {import("vite").Plugin}
 */
function imagetoolsGenerate(userConfig) {
	const config = mergeConfig(userConfig);

	return {
		name: 'responsive-image-static-paths',
		enforce: 'pre',
		transform: function (code, fileId) {
			if (filesToImportRegex.test(fileId)) {
				const imports = code.match(importCommentRegex);
				if (imports) {
					console.log('processing: ' + fileId);
					for (const importStatement of imports) {
						const generatedCode = generateImportsFromCommentString(importStatement, config);
						code = code.replace(importStatement, generatedCode);
						console.log(generatedCode);
					}
				}
			}
			return { code, map: null };
		},
	};
}

export { imagetoolsGenerate };
