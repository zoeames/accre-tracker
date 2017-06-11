module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js', '!../javascripts/vendor/**/*.js'],
      options: {
        predef: [ "document", "console", "$"],
        esnext: true
      }
    },
     sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd:"../",
            src: [
              "index.html",
              "favicon.ico",
              "javascripts/**/*",
              "styles/**/*.css",
              "images/**/*",
              "partials/**/*.html",
              "lib/node_modules/jquery/dist/jquery.js",
              "lib/node_modules/bootstrap/dist/js/bootstrap.js",
              "lib/node_modules/angular/angular.min.js",
              "lib/node_modules/angular-route/angular-route.min.js",
              "lib/node_modules/angular-animate/angular-animate.min.js",
              "lib/node_modules/angular-sanitize/angular-sanitize.min.js"
            ],
            dest: "../public/"
        }
        ]
      }
    },
    clean: {
      dist: {
        options: {force: true},
        src: ['../public']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
  grunt.registerTask('deploy', ['copy']);
  grunt.registerTask('cl', ['clean']);
};