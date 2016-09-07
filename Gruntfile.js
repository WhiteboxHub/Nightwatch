module.exports = function (grunt) {
    grunt.initConfig({
        conf: grunt.file.readJSON('config/config.json'),
       nightwatch_report: {
            files: ['report/!**!/!*.xml'],
            options: {
                outputDir: 'test/reports/summary'
            }
        },
        watch: {
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }
            },
            dev: {
                files: ['app/!**!/!*.js'],
                tasks: 'jshint:dev'
            },
            prod: {
                files: ['app.js'],
                tasks: 'jshint:prod'
            }
        },
        nightwatch: {
            options: {
                standalone: 'true'
            },
            dev: {
                src_folders: ['test/tests'],
                output_folder: 'report',
                "launch_url": "<%= conf.devURL %>"
            },
            qa: {
                src_folders: ['test/tests'],
                output_folder: 'report',
                "launch_url": "<%= conf.qaURL %>"
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nightwatch');
    grunt.loadNpmTasks('grunt-nightwatch-report');
    grunt.registerTask('dev', ['watch:dev', 'jshint:dev']);
    grunt.registerTask('prod', ['watch:prod', 'jshint:prod']);
    grunt.registerTask('default', ['nightwatch:qa']);
};