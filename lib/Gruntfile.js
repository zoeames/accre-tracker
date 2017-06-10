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
              "javascripts/**/*.js",
              "styles/**/*.css",
              "partials/**/*.html",
              "lib/node_modules/bootstrap/dist/css/bootstrap.min.css",
              "lib/node_modules/jquery/dist/jquery.min.js",
              "lib/node_modules/bootstrap/dist/js/bootstrap.min.js",
              "lib/node_modules/angular/angular.min.js",
              "lib/node_modules/angular-route/angular-route.min.js"
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