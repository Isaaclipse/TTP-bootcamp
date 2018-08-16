var express = require('express');
var app = express();

var name = 'Isaac';
var lname = 'Atif';
var word = 'word';

app.get('/:name/:last',function(req,res) {
    res.send(req.params.name +  ' ' + req.params.last);
});

app.get('/hello/:name',function(req,res) {
    res.send('Hello ' + req.params.name);
});

app.get('/:word',function(req,res) {
    var x = req.params.word;
    var y = '';
    for (i = x.length-1; i >= 0; i--) {
        y += x[i];
    }

    res.send(y);
});

app.get(['/apple','/ale'],function(req,res) {
    res.send('Apple or Ale?');
});

app.get('/whoa',function(req,res) {
    res.send('I know right?');
});

app.get('/',function(req,res) {
    res.send('This is default text');
});

app.listen(3000,function() {
    console.log('Example app listening on port 3000!');
});