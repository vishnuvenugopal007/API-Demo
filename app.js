var express = require('express')
var app = express()
var request = require('request')

app.get('/results', function(req, res){
  res.send('Helo, it works!')
  request('http://omdbapi.com/?s=california&apikey=thewdb', function(error, res, req){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render('results', {data: data})
    }
  })
})

app.listen(process.env.PORt, process.env.IP, function(){
  console.log('Movie App has started!')
})
