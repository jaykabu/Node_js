 // const fs = require("fs");
// const http = require("http");
// const server = http.createServer((request,response)=>{
//
//     fs.readFile(__dirname+"/hello.txt","utf8",(error,data)=>{
//
//     response.writeHead(200,{"content-type":"text/plain "});
//     response.write(data);
//
//     response.end();
//
//     });
// }).listen(8080,()=>console.log("running"));



// async and sync method

// const fs = require("fs");
// fs.readFile(__dirname+"/hello.txt","utf8",(error,data)=>{
//     console.log(data);
//  });
// console.log("google");


try{
    const data = fs.readFileSync("__dirname +/hello.txt","utf8");
    console.log(data);

}
catch (e) {
    console.log(e);
}
console.log("google");







