module.exports = function(grunt) {
  grunt.initConfig({
    uglify : {
      min : {
        files: {
          "dash.webm.min.js" : [
            "../../src/streaming/MediaPlayer.js",
            "../../src/streaming/Context.js",
            "../../src/dash/Dash.js",
            "../../src/dash/DashContext.js",
            "app/js/webm/Webm.js",
            "app/js/webm/WebmContext.js",
            "app/js/webm/WebmURLExtensions.js",
            "../../src/**/*.js"]
        }
      },
      all : {
        files: {
          "dash.webm.all.js" : [
            "../../externals/*.js",
            "../../src/streaming/MediaPlayer.js",
            "../../src/streaming/Context.js",
            "../../src/dash/Dash.js",
            "../../src/dash/DashContext.js",
            "app/js/webm/Webm.js",
            "app/js/webm/WebmContext.js",
            "app/js/webm/WebmURLExtensions.js",
            "../../src/**/*.js"
		  ]
        }
      },
      debug: {
        options: {
          beautify: true,
          compress: false,
          mangle: false
        },
        files: {
            "dash.webm.debug.js" : [
              "../../externals/*.js",
              "../../src/streaming/MediaPlayer.js",
              "../../src/streaming/Context.js",
              "../../src/dash/Dash.js",
              "../../src/dash/DashContext.js",
              "app/js/webm/Webm.js",
              "app/js/webm/WebmContext.js",
              "app/js/webm/WebmURLExtensions.js",
              "../../src/**/*.js"
  		  ]
        }
      }
    }
  });

  // Require needed grunt-modules
  grunt.loadNpmTasks('grunt-contrib-uglify');


  // Define tasks
  grunt.registerTask('default', ['uglify']);
};
