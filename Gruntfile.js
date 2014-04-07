module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'assets/js/scripts.min.js': [
                        'assets/js/lib/*.js',
                        'assets/js/_*.js'
                    ],
                    'assets/js/ie.min.js': [
                        'assets/js/ie/*.js'
                    ]
                }
            },
            dev: {
	            files: {
		            'assets/js/scripts.min.js': [
                        'assets/js/lib/*.js',
                        'assets/js/_*.js'
                    ]
	            }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: false,
                    lineNumbers: true,
                    require: 'susy'
                },
                files: {
                    'assets/css/screen.css': [
                        'assets/sass/screen.scss'
                    ]
                }
            }
        },
        watch: {
            sass: {
            	options: {
	            	livereload: true,
            	},
                files: [
                    'assets/sass/*.scss',
                    'assets/sass/partials/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            },
            uglify: {
            	options: {
	            	livereload: true,
            	},
	            files: [
	            	'assets/js/_*.js'
	            ],
	            tasks: [
	            	'uglify:dev'
	            ]
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', [
        'uglify:dist',
        'sass',
        'watch'
    ]);

};