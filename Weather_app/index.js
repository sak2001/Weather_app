const http = require('http');
const fs = require('fs');
var request = require("requests");

const homeFile = fs.readFileSync("home.html", 'utf-8')

const server = http.createServer((req, res) =>{

    if(req.url == "/"){
        
        request("http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=6b06f9e44311dc4c189749dbdc696fb4")
        
        .on('data', function(chunk) {
            const new_data = JSON.parse(chunk)
            const arr = [new_data]
            console.log(arr);
        })
         .on('end', function(err) {
             if(err) 
                return console.log('connections closed due to errors', err);

            console.log('end');    
         })
    }

});

server.listen(8000, "127.0.0.1");