var express = require('express');

var app = express();

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
	console.log('Server started');
});

// start a git hub project:
/*
git init
git add --all
git commit -m "first commit"
git remote add origin https://github.com/kevinlin14/expresss.git
git push -u origin master 
*/

// push changes to a git hub project:
/*
git add --all
git commit -m "first commit" // or whatever u want to say
git remote add origin https://github.com/kevinlin14/expresss.git
git push -u origin master 
*/