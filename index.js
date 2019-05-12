const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();
var bodyParser = require('body-parser');
var User = require('./Model/User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app  
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => {console.log(`Listening on ${ PORT }`);})

app.get('/', (req, res) => res.sendFile(__dirname+'/views/index.html'))
app.get('/api/users', User.getAllUsers);
app.get('/api/userById/:id', User.getUserById)
app.get('/api/userByName/:name', User.getUserByName)
app.post('/api/user', User.createUser)
app.put('/api/user/:id', User.updateNameById)
app.post('/api/user/points', User.updatePointsByName)
app.delete('/api/user/:id', User.deleteUserById)