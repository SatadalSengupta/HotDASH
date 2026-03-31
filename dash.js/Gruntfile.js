module.exports = function (grunt) {
    require('time-grunt')(grunt);

    grunt.initConfig({
        clean: {
            build: ['build/temp'],
            dist: ['dist/*']
        },
        uglify: {
            options: {
                sourceMap: true,
                sourceMapIncludeSources: true,
                sourceMapRoot: './src/',
                preserveComments: 'some',
                mangle: true,
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: false
                }
            },

            build_core: {
                options: {
                    sourceMapIn: 'build/temp/dash.mediaplayer.debug.js.map'
                },
                files: {
                    'build/temp/dash.mediaplayer.min.js': 'build/temp/dash.mediaplayer.debug.js'
                }
            },
            build_protection: {
                options: {
                    sourceMapIn: 'build/temp/dash.protection.debug.js.map'
                },
                files: {
                    'build/temp/dash.protection.min.js': 'build/temp/dash.protection.debug.js'
                }
            },

            build_reporting: {
                options: {
                    sourceMapIn: 'build/temp/dash.reporting.debug.js.map'
                },
                files: {
                    'build/temp/dash.reporting.min.js': 'build/temp/dash.reporting.debug.js'
                }
            },

            build_all: {
                options: {
                    sourceMapIn: 'build/temp/dash.all.debug.js.map'
                },
                files: {
                    'build/temp/dash.all.min.js': 'build/temp/dash.all.debug.js'
                }
            },

        },
        copy: {
            dist: {
                expand: true,
                cwd: 'build/temp/',
                src: [
                    'dash.all.min.js', 'dash.all.min.js.map',
                    'dash.mediaplayer.min.js', 'dash.mediaplayer.min.js.map',
                    'dash.protection.min.js', 'dash.protection.min.js.map',
                    'dash.all.debug.js', 'dash.all.debug.js.map',
                    'dash.reporting.min.js', 'dash.reporting.min.js.map',
                    'dash.mediaplayer.debug.js', 'dash.mediaplayer.debug.js.map',
                    'dash.protection.debug.js', 'dash.protection.debug.js.map',
                    'dash.reporting.debug.js', 'dash.reporting.debug.js.map'
                ],
                dest: 'dist/',
                filter: 'isFile'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default',   ['dist', 'test']);
    grunt.registerTask('dist',      ['clean']);
    grunt.registerTask('test',      []);
    grunt.registerTask('watch',     []);
    grunt.registerTask('release',   ['default']);
    grunt.registerTask('debug',     ['clean']);
    grunt.registerTask('lint',      []);
    grunt.registerTask('prepublish', ['dist']);
};
