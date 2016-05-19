/*
 * grunt-init-markup
 * https://gruntjs.com/
 *
 * Copyright (c) 2015.
 * Licensed under the MIT license.
 */
'use strict';

// Basic template description.
exports.description = 'Create a markup project boilerplate using grunt.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
    init.process({}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('version', '0.0.1'),
        init.prompt('description'),
        init.prompt('repository', ''),
        init.prompt('private' , 'true'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('css_file_name'),
        init.prompt('static_file_name'),
        init.prompt('js_file_name')

    ], function(err, props) {
        props.keywords = [];
        props.devDependencies = {
            "grunt": "^0.4.5",
            "grunt-contrib-concat": "^0.5.0",
            "grunt-contrib-cssmin": "^0.12.2",
            "grunt-contrib-jshint": "^0.11.2",
            "grunt-contrib-compass": "*",
            'grunt-include-replace': '^2.0.2',
            "grunt-contrib-uglify": "~0.5.0",
            "grunt-contrib-watch": "^0.6.1",
            "grunt-livereload": "^0.1.3",
            "grunt-newer": "^1.1.0",
            "jshint-stylish": "^1.0.1",
            "load-grunt-tasks": "^3.1.0"

        };
        props.engines = {
                "node": ">0.10.8"
        };

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', props);

        grunt.file.mkdir('./img');
        grunt.file.mkdir('./css');
        grunt.file.mkdir('./js');

        // All done!
        done();
    });
};


