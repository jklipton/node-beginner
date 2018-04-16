const server = require('./server');
const router = require('./router');
const requestHandlers = require('./requestHandlers');

const handle = {};

handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle['/show'] = requestHandlers.show;


// the above above pattern is simulating an 'associative array' to handle all the potential routes for our router.  This is called a dependency injection.  It allows us to keep the files seperate while only importanting the neccesary amount of code 

server(router, handle);