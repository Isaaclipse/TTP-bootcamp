var express = require('express');
var app = express();
//define a route to greet someone by name, eg /hello/sally
app.get('/hello/:name', function(request, response) {
console.log(`got request for "/hello/${request.params.name}"`);
//in the above example, returns "hello sally!"
response.send(`hello ${request.params.name}!`);
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});