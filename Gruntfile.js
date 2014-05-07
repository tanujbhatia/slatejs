/*
 *  File: Gruntfile.js
 *  Date: 5 May, 2014
 *  Author: Ashish Chopra
 *  =================================================
 *  It is a build file that builds the framework and provide
 *  the distribution version to be used in applications. 
 * 
 *  In order to run this, download the project from Git, You must 
 *  have grunt-cli installed, then 
 *  npm install (to download project dependencies
 *  grunt build  (to build the distribution version of the Slate.js)
 *  
 */
module.exports = function(grunt) {

  grunt.initConfig({
	  
    distFolder: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
    	  options: {
    	    // define a string to put between each file in the concatenated output
    	    separator: ';'
    	  },
    	  dist: {
    	    // the files to concatenate
    	    src: [ "src/core/*.js", 
    	           "src/sandbox/*.js", 
    	           "src/modules/*.js" ],
    	    // the location of the resulting JS file
    	    dest: '<%= distFolder %>/<%= pkg.name %>-v<%= pkg.version %>.js'
    	  }
    	}
  });

  // We've set up each task's configuration.
  // Now actually load the tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register our own custom task alias.
  grunt.registerTask('default', ['concat']);
};