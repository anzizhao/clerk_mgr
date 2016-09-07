var fs = require('fs')
fs.readFile('page.js',"utf-8", function(err, data){
    console.log(data)
    var obj = eval(data)
    var str = JSON.stringify(obj)
    fs.writeFile('mockdata.json', str, function(err, data){
        if( err ) {
            console.error(err) 
            return 
        } 
        console.log('success to write result.js ')
    }) 
})
