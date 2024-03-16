
/*event emitter works in the same way as we do with the event listener in vanilla js 
*/
const logEvents = require('./logEvent');
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
const http = require('http')
const path = require('path')
const fs = require('fs')
const fspromises = require('fs').promises;
// here there are the 2 method that is available for the eventEmitter object  that  is on and emit 
/*
on- attach a callback function , can be excuted whenever the event is triggered 
emit ()-- to trigger an event 
we can alos pass the argument to the on methosd even we can pas the multiple argument 

eventEmitter.on("log", (msg) =>logEvents(msg) );
eventEmitter.emit("log", "log event emitted : ");

now we have some other method tat is availbale to the eventEmitter nibject of the eventEmitter calss'
*/

const port = process.env.port || 4000;
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    /*
let path;
    if (req.url === '/' || req.url === 'index.html') {
        res.statusCode(200);
        res.setHeader('content-type', 'text/index.html');
        path = (path.join(__dirname, 'views', 'index.html'));
        fs.readFile(path, 'utf-8', (err, data) => {
            res.end(data);
        })
    }
    */

    const extension  = path.extname(req.url);
    let content_type ;
    switch(extension){
        case '.css':
            content_type= 'text/css';
            break;
        case '.js':
            content_type= 'text/js';
            break;
        case '.json':
            content_type= 'text/json';
            break;
        case '.jpg':
            content_type= 'text/jpeg';
            break;
        case '.png':
            content_type= 'text/png';
            break;
        case '.txt':
            content_type= 'text/plain';
            break;
        default:
            content_type = 'text/html';
    }
})

server.listen(port, () => {
    console.log(`server listening on the port ${port}`);

})


