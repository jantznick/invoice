const sass = require('node-sass');
const fs = require('fs');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

sass.render({
	file: 'app/styles/index.scss',
	outFile: 'public/styles/style.css'
}, function(err, result) {
	if (err) {
		console.log(err);
	}
	fs.writeFile('public/styles/style.css', result.css, () => {
		console.log("CSS built");
		fs.readFile('public/styles/style.css', (err, css) => {
			postcss([autoprefixer])
			.process(css, { from: 'public/styles/style.css', to: 'public/styles/style.css' })
			.then(result => {
				fs.writeFile('public/styles/style.css', result.css, () => {
					console.log('CSS prefixed');
				})
			})
		})
	});
});
