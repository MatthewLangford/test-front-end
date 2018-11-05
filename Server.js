const express = require('express'),
      bodyParser = require('body-parser'),
      app = module.exports = express();

let rigInfo = {};


app.use(express.static(__dirname + '/build'));
app.use(bodyParser.json());
app.get('/api/rigInfo')

app.post('/api/updateRigInfo', (req, res, next) =>{
    console.log(req.body)
    rigInfo =  req.body
    res.json(rigInfo)
});


app.listen(3500);