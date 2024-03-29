const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy:MM:dd\tHH:mm:ss')}`;
    const logitem = `${dateTime}\t${uuid()}\t${message}\n`;

    console.log(logitem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'events.txt'), logitem);
    } catch (error) {
        console.error(error);
    }
};

const logger =(req,res,next)=>{
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`);
    console.log(`${req.method} ${req.headers.origin} ${req.path}`);
    next();
};

module.exports = {logger,logEvents};