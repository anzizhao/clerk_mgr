module.exports  = function(grunt) {
    var nowTime = new Date(); 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            json: {
                 exec: 'npm run json',
            }
        },
        watch: {
            json: {
                files: 'mockdata.js',
                tasks: ['run:json'],
                options: {
                    atBegin: true,
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-watch'); 

};

