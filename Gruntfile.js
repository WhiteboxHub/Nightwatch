module.exports = function (grunt) {
    grunt.initConfig({
        conf: grunt.file.readJSON('config/config.json'),
       nightwatch_report: {
            files: ['report/!**!/!*.xml'],
            options: {
                outputDir: 'test/reports/summary'
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
    grunt.loadNpmTasks('grunt-nightwatch');
    grunt.loadNpmTasks('grunt-nightwatch-report');
    grunt.registerTask('default', ['nightwatch:qa']);
};