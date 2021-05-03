const express = require('express');
const bodyParser = require('body-parser')
//import bodyParser from 'body-parser';
const app = express();

const apiPath = '/api/' ;
app.use(express.json());
app.use(express.urlencoded( {extended : true} ));

//Websites
app.use(express.static('templates'));

//Api
app.use(apiPath + 'user', require('./routes/user.route'));
app.use(apiPath + 'signup',require('./routes/signup.route'));



const server = app.listen(port="3000", () =>{
    const host = 'localhost';
    const port = server.address().port;

    console.log(`Server is running at http://${host}:${port}`);
})