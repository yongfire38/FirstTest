const http = require('http');

http.createServer(function(req, res){
    res.end('Hello World\n');
}).listen(3000, () => {
    console.log('server ready on 3000!!!');
});

