const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
const couch = require('nano')()
const db = couch.use('test');
const nanoid = require('nanoid')

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/api/getList', (req, res) => {
    
    db.view('sumValue','new-view',{'group':true})
    .then((body) => {
        res.send(body.rows);        
    });
    
    console.log('Sent list of items');
});

app.put('/api/add', (req, res) => {
    let newData = req.body;
    db.insert(newData, nanoid.nanoid()).then((body) => {
        res.send(body);
     });    
    
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(9000);