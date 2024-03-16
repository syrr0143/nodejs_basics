const express = require('express');
const path = require('path');
const port = process.env.port || 4000;
const app = express();
app.get('/', (req, res) => {
    console.log(req.url)
    console.log("on home page ");
    res.send("hello how are you ")
})
const now = new Date();
const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}  ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`


app.get('/hello', (req, res) => {
    console.log(req.url)
    console.log(`on hello page ${formattedDate}`);
    console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html') //this is one way of sending the file to thr server
    /*
    we can also use the another vaavilbale methisds
    res.sendfile('./views/index.html',{root:__dirname});

    we can also use the 
    res.sendfile(path.join(__dirname , 'views',"index.html"))
    */

    /*
    express also accept the regular expression in routing 
    like 
    
    */

})
app.use('/',require('./router'));
app.use('/employee',require('./employee'));
// this is called as the middleware function
app.get('/hi', (req, res, next) => {
    // res.send("hi= Page this isi ")
    console.log("indide the hi function having the next function as middleware ")
    next();
}, (req, res) => {
    console.log("this is next page");
    res.send("this is send to next ")
});

// there is another way to write the middleare function

const one = (req, res, next) => {
    console.log("one")
    next();
}
const two = (req, res, next) => {
    console.log("2")
    next();
}
const three = (req, res, next) => {
    console.log("3")
    res.send("hello this is last page of the middleware function")
}

app.get('/chain',[one,two,three]);
app.listen(port, () => {
    console.log(`ruuning on the  prot ${port}`);
})