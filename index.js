var express = require('express');
var app = express();

app.get('/', (req, res) =>{
  res.send('hello route')
})

app.listen(3000, () => {
  console.log('example in route')
})
