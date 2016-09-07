var fs = require('fs')
fs.readFile('mockdata.js',"utf-8", function(err, data){
    var obj = eval(data)
    var str = JSON.stringify(obj)
    var result = 'mockdata.json'
    fs.writeFile(result, str, function(err, data){
        if( err ) {
            console.error(err) 
            return 
        } 
        console.log('success to write', result)
    }) 
})
