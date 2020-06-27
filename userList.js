const express = require('express');
const app = express();
const morgan = require('morgan');

const users = [
  {id:1, name:'alice'},
  {id:1, name:'alice'},
  {id:1, name:'alice'},
]

app.use(morgan('dev'))

app.get('/users', (req,res) => {
  res.json(users);
})

app.listen(3000, () => {
  console.log('user list api')
})