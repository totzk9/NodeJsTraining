const express = require('express')
const path = require('path')
const fs = require('fs')
const handlebars = require('express-handlebars');

// const publicDirectoryPath = path.join(__dirname, '../public')
const app = express()

// app.use(express.static(publicDirectoryPath))

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
  layoutsDir: __dirname + '/views/layouts'
}))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('main', {layout : 'index'});
})

app.listen(3001, () => {
  console.log('server running')
})