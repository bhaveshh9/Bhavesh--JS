const { count } = require("console");

//
const routes= require("express").Router();

routes.get('/', function(reqest,responce ){
responce.send("welcome to expression");
})
routes.get("/about-us", function(reqest, responce){
    responce.send("about us");
})
routes.get("/our-team", function(reqest, responce){
    responce.send("our-team");
})
// export module
module.exports=routes;
//export is always bottom 
