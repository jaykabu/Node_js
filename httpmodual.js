// const http = require("http");
// const server = http.createServer(function (request,response) {
// response.writeHead(200,{"content-type":"text/html "});
//     response.write("<h1> Node JS <h1>");
//     response.write("<h1> Node JS running<h1>");
//
//     response.end();
//
// }).listen(8080,()=>console.log("server is running"));




const http = require("http");
const server = http.createServer(function (request,response) {
    response.writeHead(200,{"conent-type":"text/html"});
    response.write("<b>jay kabu</b>");

    response.end();

}).listen(8080,()=>console.log("running"));
