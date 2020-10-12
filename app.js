//made this from this tutorial: <https://www.youtube.com/watch?v=PFJHQ2g6s0k>
var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Nara, JP&appid=d21182cea448ccd30b383aa34b9af45a&units=metric';

var server = http.createServer(function(request, response){
//ALL LOGIC WILL GO HERE 
var request = require('request');
request(url, function(err, res, body){
    var data = JSON.parse(body);
    response.write("<html><body><div id='container'>");
    response.write("<h1>"+ 'City Name- : ' + data['name']　+ '<br>' + "</h1>");
    response.write("<h2>"+ 'Temperature- : ' + data.main['temp'] + '<br>' + "</h2>");
    response.write("<h2>"+ 'Sunset Time- : ' + new Date(data.sys['sunset']*1000)+"</h2>");
    response.write("</div></body></html>");
    response.end();
});    


}).listen(process.env.PORT || 3000);
