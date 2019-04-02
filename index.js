const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
var bodyParser = require('body-parser');
var Test = require('./Model/Test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app  
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => {
      console.log(`Listening on ${ PORT }`);
      console.log(process.env.DB_USER);
    })

app.get('/', (req, res) => res.sendFile(__dirname+'/views/index.html'))
app.get('/api/prova', Test.getAllTest);
app.get('/api/prova/:id', Test.getTestById)
app.post('/api/prova', Test.createTest)
app.put('/api/prova/:id', Test.updateNameById)
app.delete('/api/prova/:id', Test.deleteTestById)