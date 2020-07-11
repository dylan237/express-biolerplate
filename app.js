require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = process.env["PORT"]

// middle ware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.get('/', (req, res) => {

})

// static sources
const staticSource = path.join(__dirname, 'public')
app.use('/static', express.static(staticSource))

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
})