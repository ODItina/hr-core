'use strict';
/**
 * Created by Dominic on 11-Sep-2014.
 */
module.exports  = function(grunt){


    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),

        jshint:{
            files:['gruntfile.js','dtos/**/*.js', 'models/**/*.js', 'engines/**/*.js', 'services/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: true
            }
        },

        watch:{
            files: ['<%=  jshint.files %>'],
            tasks:['jshint']
//            options:{
//                reload:true
//            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);
};