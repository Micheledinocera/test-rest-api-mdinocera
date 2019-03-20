const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.sendFile(__dirname+'/views/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/api/prova', (req,res) => {
  console.log("ciao");
  res.write('ciao');
  res.end(); 
});