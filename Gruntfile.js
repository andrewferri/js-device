module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Minify javascript
		uglify: {
			options: {
				sourceMap: true
			},
			build: {
				src: 'src/*.js',
				dest: 'jquery.js-device.min.js'
			}
		},

		// Watch and build
		watch: {
			uglify: {
				files: 'src/*.js',
				tasks: ['uglify']
			}
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Run
	grunt.registerTask('default', ['watch']);
};
