// var x = ;
// (funcition(exports, require, module, __filename, __dirname){
    console.log(__filename);
    console.log(__dirname);
    var url = 'https://mylogger.io/log';



    function log(message) {
        //Send an HTTP request
        console.log(message);
    }
    module.exports = log;

    module.exports.log = log; //same as line 9

// })

