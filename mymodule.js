var fs = require('fs');
var path = require('path');

var mymodule = function(dir, ext, cb){

    fs.readdir(dir, function(err, list){
        if(err)
            return cb(err);

        list = list.filter(function(file){
            return path.extname(file) === '.' + ext;
        });

        return cb(null, list);
    });
};

module.exports = mymodule;
