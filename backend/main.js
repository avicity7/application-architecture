const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const port = 3000

dotenv.config()
const app = express()
const httpServer = http.createServer(app)

app.use(cors())
app.use("/api/test", require("./routes/test"))


httpServer.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`Server running on port ${port}`)
})



