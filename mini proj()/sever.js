const http = require("http");
const server =http.createServer(getresponse);
server.listen(4000);
console.log("server is running at 4000 port");
function getresponse(req,res){
    if(req.url=="/")
    res.writeHead(200,{'content-type':'text/html'});
    res.write(`<html><head></head><body><h1 style ="color:green">Welcome to KEC Learning Hub</h1><p>Empower your learning journey with <b>high-quality courses</b> designed for
<b>students, professionals, and lifelong learners</b>. Whether you want to
<b>enhance your skills, explore new subjects, or prepare for certifications</b>,
we have the right courses for you!   how is it</p></body></html>`);
    res.end();
}