const configs = require("./scriptConfig");

(function () {
	configs.algorithms.forEach(function (algorithm) {
		
	})
})();



sfraBuilderConfig.cartridges.forEach(function (cartridge) {
	let cartridgeRoot = cartridge.split('cartridges')[0];
	let packageRoot = cartridgeRoot + 'package.json';
	if (fs.existsSync(packageRoot)) {
		// console.log('packageJson path: ', packageRoot);
		let packageName = require(cartridgeRoot + 'package.json').name;
		if (packageName === 'sfra') {
			const fontsDir = cartridgeRoot + 'cartridges/app_storefront_base/cartridge/static/default/fonts';
			mkdir('-p', fontsDir);
			cp('-r', cartridgeRoot + 'node_modules/font-awesome/fonts/', cartridgeRoot + 'cartridges/app_storefront_base/cartridge/static/default');
			cp('-r', cartridgeRoot + 'node_modules/flag-icon-css/flags', fontsDir + '/flags');
		}
	}
});
