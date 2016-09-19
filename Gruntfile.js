module.exports  = function(grunt) {
    var nowTime = new Date(); 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        run: {
            json: {
                 exec: 'npm run json',
            },
            killMockdata: {
                exec: "ps -ef | grep 'json-server' |  awk '{print $2}'| xargs kill" 
            },
            mockdata: {
                exec: "npm run server" 
            },
            tar: {
                exec: "tar -zcf clerk.tar.gz  index.html css js img test" 
            }
        },
        watch: {
            mockdata: {
                files: 'test/data/mockdata.js',
                tasks: ['run:killMockdata', 'run:mockdata'],
                options: {
                    atBegin: true,
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-contrib-watch'); 

};

