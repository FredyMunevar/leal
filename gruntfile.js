module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        dist: {
          options: {
            sourcemap: false,
            compress: false,
            yuicompress: false,
            style: 'expanded',
          },
          files: {
            'css/styles.css' : 'sass/styles.scss'
          }
        },
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
  }