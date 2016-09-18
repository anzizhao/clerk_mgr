var mockData = require('./mockdata')()

var opResponse = {
    error: 0,
    msg: ''
}
module.exports = function (req, res, next) {
    switch( req.path ) {
        case '/date' : 
            return res.send( mockData.date ) 
        case '/list' : 
            return returnList(req, res)
        case '/bindCard' : 
            return res.json( opResponse )
    }

    var reg = /^\/detail\/\d+$/  
    if( reg.test(req.path) ) {
        return returnDetail(req, res)
    }

    reg = /^\/detail\/\d+\/list$/  
    if( reg.test(req.path) ) {
        return returnDetailList(req, res)
    }


    res.send({error: 1000, msg:'Not found'})
}




function returnList(req, res){
    var retData = clone( mockData.list ) 
    if( req.query.date ) {
        var date = parseInt( req.query.date ) 
        retData.data.section[0].list.forEach(function(item){
            item .order_num +=  date * 100  
            item.money_num += date * 100
        })
    }
    return res.send( retData ) 
}

function returnDetailList(req, res){
    var clerkId = req.path.split('/')[2]
    var retData = clone( mockData.detailList ) 
    if( req.query.page && req.query.page > 1 ) {
        retData = clone( mockData.detailList_more ) 
    } else {
        retData = clone( mockData.detailList ) 
    }
    return res.send( retData ) 
}

function returnDetail(req, res){
    var clerkId = req.path.split('/')[2]
    var key = 'detail_' +  clerkId
    var retData = clone( mockData[key] ) 
    return res.send( retData ) 
}

// 复制函数  用于复制对象
function clone(obj) {
    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) 
        return obj;
    
    // Handle Date
    if (obj instanceof Date) {
        var copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        var copy = [];
        for (var i = 0, len = obj.length; i < len; ++i) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        var copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}
