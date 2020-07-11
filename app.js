require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env["PORT"]

app.get('/', (req, res) => {

})

// static sources
const staticSource = path.join(__dirname, 'public')
app.use('/static', express.static(staticSource))

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
})