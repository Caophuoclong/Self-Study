const http = require("http");
const fs = require("fs");
const host = 'localhost';
const port = 8000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html"});
    console.log("Server is working");
    fs.readFile("./templates/index.html", (err,data)=>{ // open file html
        if (err) {
            console.log("Error open file: " + err);
        }
        console.log('Operation successful');
        res.end(data);
    })
});

server.listen(port,host,(error)=>{
    if (error) {
        console.log("Error occurred: "+error);
    }
    console.log("Server is running on "+host+':'+port);
});
