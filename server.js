const http = require('http');
const url = require('url');

// http.createServer( (req, res) => {

//     res.writeHead(200, {'Content-Type' : 'text/plain'});
//     res.write('Lady in the street!');
//     res.end()

// }).listen(8888);

// //can be refactored to:
function start(route, handle) {
    function onRequest(req, res){
        const pathname = url.parse(req.url).pathname;
        console.log(`request for ${pathname} recieved.`);

        route(handle, pathname, res, req);
    }

    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}


module.exports = start;