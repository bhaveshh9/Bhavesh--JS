const express = require('express');
const { read } = require('fs');
const routes = require('./routes');

//create a server
const server = express();

//add a routing
server.use( '/', routes );

//port
server.listen(3003, function(){
    console.log("Server is running on port 3003");
});

//express works as a mechanism called as routing

//form methpds --- http server
//  get -> read  ---(it a default method of html/browser)
//  post -> add
//  delete -> delete
// put -> to update multiple records
// patch -> to update specific record
