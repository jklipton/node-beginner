const http = require('http');

function onRequest (req, res) {
    console.log('request recieved');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started');

//on a web browser
//welcome page at localhost/start w/ file upload form
//choose an image file to upload
// ++ on submit the file should be # localhost/upload and displayed
