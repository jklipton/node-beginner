const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

function start(res) {
    console.log (`request handler 'start' was called.`);

    const body= `
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-9"  />
        </head>
        <body>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <input type="file" name="upload" multiple="multiple">
                <input type="submit" value="upload file"  />
            </form>
        </body>
    </html>`

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function upload(res, req) {
    console.log(`request handler 'upload' was called`);

    const form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(req, (error, fields, files) => {
        console.log('parsing done');

        fs.rename(files.upload.path, '/tmp/test.png', (error) => {
            if (error) {
                fs.unlink('/tmp/test.png');
                fs.rename(files.upload.path, '.tmp/test.png');
            }
        });

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`recieved image: <br/>`);
        res.write(`<img src="/show" />`);
        res.end();
    });
}

function show(res){
    console.log(`request handler 'show' was called.`);
    res.writeHead(200, {'Content-Type': 'image/png'});
    fs.createReadStream('/tmp/test.png').pipe(res);
}

module.exports = { start, upload, show };

